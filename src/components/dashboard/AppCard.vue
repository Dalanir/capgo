<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { definitions } from '~/types/supabase'
import { formatDate } from '~/services/date'
import { useSupabase } from '~/services/supabase'

const props = defineProps<{
  app: definitions['apps']
  channel: string
}>()

const route = useRoute()
const router = useRouter()
const supabase = useSupabase()

const isLoading = ref(true)
const devicesNb = ref(0)

const loadData = async () => {
  if (!props.channel) {
    try {
      const date_id = new Date().toISOString().slice(0, 7)
      const { data, error } = await supabase
        .from<definitions['app_stats']>('app_stats')
        .select()
        .eq('app_id', props.app.app_id)
        .eq('date_id', date_id)
        .single()
      if (!data || error)
        return
      devicesNb.value = data?.devices
    }
    catch (error) {
      console.error(error)
    }
  }
}

const refreshData = async () => {
  isLoading.value = true
  try {
    devicesNb.value = 0
    await loadData()
  }
  catch (error) {
    console.error(error)
  }
  isLoading.value = false
}

const openPackage = (appId: string) => {
  router.push(`/app/package/${appId.replace(/\./g, '--')}`)
}

watchEffect(async () => {
  if (route.path.endsWith('/app/home'))
    await refreshData()
})
</script>

<template>
  <!-- Row -->
  <tr class="cursor-pointer text-slate-800 dark:text-white" @click="openPackage(app.app_id)">
    <td class="p-2">
      <div class="flex flex-wrap items-center">
        <img :src="app.icon_url" class="mr-2 shrink-0 sm:mr-3" width="36" height="36">
        <div class="max-w-max">
          {{ props.app.name }}
        </div>
      </div>
    </td>
    <td class="p-2">
      <div class="text-center">
        {{ props.app.last_version }}
      </div>
    </td>
    <td class="p-2">
      <div class="text-center">
        {{ formatDate(props.app.updated_at) }}
      </div>
    </td>
    <td class="p-2">
      <div v-if="!isLoading && !props.channel" class="text-center">
        {{ devicesNb }}
      </div>
      <div v-else class="text-center">
        {{ props.channel }}
      </div>
    </td>
  </tr>
</template>
