<script setup lang="ts">
import { IonIcon, toastController } from '@ionic/vue'
import { ref, watchEffect } from 'vue'
import copy from 'copy-text-to-clipboard'
import { useRoute, useRouter } from 'vue-router'
import { arrowBack, copyOutline } from 'ionicons/icons'
import { useI18n } from 'vue-i18n'
import { useSupabase } from '~/services/supabase'
import type { definitions } from '~/types/supabase'
import { useMainStore } from '~/stores/main'
import { useLogSnag } from '~/services/logsnag'

const props = defineProps<{
  onboarding: boolean
}>()
const emit = defineEmits(['done'])

const route = useRoute()
const isLoading = ref(false)
const step = ref(0)
const appId = ref<string>()
const realtimeListener = ref(false)
const mySubscription = ref()
const supabase = useSupabase()
const auth = supabase.auth.user()
const router = useRouter()
const main = useMainStore()
const { t } = useI18n()
const snag = useLogSnag()

const steps = ref([
  {
    title: t('log-to-the-capgo-cli'),
    command: 'npx @capgo/cli@latest login [APIKEY]',
    subtitle: '',
  },
  {
    title: t('add-your-app-to-your'),
    command: 'npx @capgo/cli@latest add',
    subtitle: `${t('into-your-app-folder')}`,
  },
  {
    title: t('add-this-code-to-you'),
    command: `import { CapacitorUpdater } from '@capgo/capacitor-updater'
CapacitorUpdater.notifyAppReady()`,
    subtitle: t('in-your-main-file'),
  },
  {
    title: t('build-your-code-and-'),
    command: 'npx @capgo/cli@latest upload',
    subtitle: '',
  },
  {
    title: t('discover-your-dashbo'),
    command: '',
    subtitle: t('this-page-will-self-'),
  },
])
const setLog = () => {
  if (props.onboarding && main.user?.id) {
    snag.publish({
      channel: 'onboarding',
      event: `step-${step.value}`,
      icon: '👶',
      tags: {
        'user-id': main.user.id,
      },
      notify: false,
    }).catch()
  }
}
const copyToast = async (text: string) => {
  copy(text)
  const toast = await toastController
    .create({
      message: t('copied-to-clipboard'),
      duration: 2000,
    })
  if (!realtimeListener.value) {
    setLog()
    step.value += 1
  }
  await toast.present()
}
const getKey = async (retry = true): Promise<void> => {
  isLoading.value = true
  const { data } = await supabase
    .from<definitions['apikeys']>('apikeys')
    .select()
    .eq('user_id', auth?.id).eq('mode', 'all')
  if (data)
    steps.value[0].command = `npx @capgo/cli@latest login ${data[0].key}`

  else if (retry && auth?.id)
    return getKey(false)

  isLoading.value = false
}
watchEffect(async () => {
  if (step.value === 1 && !realtimeListener.value) {
    // console.log('watch app change step 1')
    realtimeListener.value = true
    mySubscription.value = supabase
      .from<definitions['apps']>(`apps:user_id=eq.${main.auth?.id}`)
      .on('INSERT', (payload) => {
        // console.log('Change received step 1!', payload)
        setLog()
        step.value += 1
        appId.value = payload.new.id || ''
        realtimeListener.value = false
        mySubscription.value.unsubscribe()
      })
      .subscribe()
  }
  else if (step.value === 4 && !realtimeListener.value) {
    // console.log('watch app change step 4')
    realtimeListener.value = true
    mySubscription.value = supabase
      .from<definitions['app_versions']>(`app_versions:app_id=eq.${appId.value}`)
      .on('INSERT', (payload) => {
        // console.log('Change received step 4!', payload)
        setLog()
        step.value += 1
        realtimeListener.value = false
        mySubscription.value.unsubscribe()
        emit('done')
      })
      .subscribe()
  }
})

watchEffect(async () => {
  if (route.path === '/app/home')
    await getKey()
})
</script>

<template>
  <section class="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div v-if="props.onboarding" class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          {{ t('start-using-capgo') }}
        </h2>
        <p class="mx-auto mt-6 text-lg font-normal text-gray-600 font-pj">
          {{ t('add-your-first-app-t') }}
        </p>
        <p class="mx-auto mt-2 text-md font-normal text-muted-blue-300 font-pj">
          {{ t('pro-tip-you-can-copy') }} <span class="text-pumpkin-orange-900">{{ t('commands') }}</span> {{ t('by-clicking-on-them') }}
        </p>
      </div>

      <div v-else class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          {{ t('add-another-app') }}
        </h2>
      </div>

      <div class="max-w-2xl mx-auto mt-12 sm:px-10">
        <template v-for="(s, i) in steps" :key="i">
          <div v-if="i > 0" class="bg-gray-200 w-1 h-10 mx-auto" />

          <div :class="[step !== i ? 'opacity-30' : '']" class="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div class="flex items-start sm:items-center">
              <div class="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-muted-blue-800 w-14 h-14 rounded-xl font-pj">
                <template v-if="i < 4">
                  {{ i + 1 }}
                </template>
                <template v-else>
                  🚀
                </template>
              </div>
              <p class="ml-6 text-xl font-medium text-gray-900 font-pj">
                {{ s.title }}<br>
                <code v-if="s.command" class="text-pumpkin-orange-700 text-lg cursor-pointer" @click="copyToast(s.command)">{{ s.command }} <IonIcon :icon="copyOutline" class="text-muted-blue-800" /></code>
                <br v-if="s.command">
                <span class="text-sm">{{ s.subtitle }}</span>
              </p>
            </div>
          </div>
        </template>
        <div v-if="onboarding" class="text-center">
          <button
            class="mx-auto font-bold text-pumpkin-orange-500"
            @click="main.logout().then(() => router.replace('/login'))"
          >
            {{ t("account.logout") }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <a
    title="Go back"
    href="/app/home"
    class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-muted-blue-700 hover:drop-shadow-2xl focus:border-muted-blue-100 focus:border-2"
  >
    <IonIcon :icon="arrowBack" />
  </a>
</template>
