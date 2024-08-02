export const DEFAULT_AVATAR_URL = 'https://github.com/shadcn.png'
export const AVATAR_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/`
export const MAX_AVATAR_SIZE = 2 * 1000 * 1000 // 2 MB
export const SUPPORTED_AVATAR_IMG_TYPE = ['jpg', 'jpeg', 'png']
