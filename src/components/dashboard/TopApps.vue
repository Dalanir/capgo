<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppCard from './AppCard.vue'
import type { definitions } from '~/types/supabase'

const props = defineProps<{
  apps: definitions['apps'][]
}>()
const { t } = useI18n()
</script>

<template>
  <div id="my_apps" class="bg-white border rounded-sm shadow-lg col-span-full xl:col-span-16 border-slate-200 dark:bg-gray-800 dark:border-slate-900">
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 class="font-semibold text-slate-800 dark:text-white">
        {{ t('top-apps') }}
      </h2>
    </header>
    <div class="p-3">
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <!-- Table header -->
          <thead class="text-xs uppercase rounded-sm text-slate-400 dark:text-white bg-slate-50 dark:bg-gray-800">
            <tr>
              <th class="p-2">
                <div class="font-semibold text-left">
                  {{ t('name') }}
                </div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">
                  {{ t('last-version') }}
                </div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">
                  {{ t('last-upload') }}
                </div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">
                  {{ t('MAU') }}
                </div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm font-medium divide-y divide-slate-100">
            <!-- Row -->
            <AppCard v-for="app in props.apps" :key="app.app_id" :app="app" channel="" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
