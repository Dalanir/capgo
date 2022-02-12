import type { Handler } from '@netlify/functions'
import { sendRes } from './../services/utils'
import { useSupabase } from '~/services/supabase'
import type { definitions } from '~/types/supabase'

interface AppStats {
  platform: string
  action: string
  device_id: string
  version_name?: string
  version: number
  version_build: string
  app_id: string
}

export const handler: Handler = async(event) => {
  if (event.httpMethod === 'OPTIONS')
    return sendRes()
  const supabase = useSupabase()
  const body = JSON.parse(event.body || '{}') as AppStats

  const { data, error } = await supabase
    .from<definitions['app_versions']>('app_versions')
    .select()
    .eq('app_id', body.app_id)
    .eq('name', body.version_name)
  if (data && data.length && !error)
    body.version = data[0].id
  delete body.version_name

  await supabase
    .from('stats')
    .insert(body)
  return sendRes()
}
