// env() help us to get our values contained in .env
import { env } from 'helpers'

export default {
  url: env('API_URL', 'https://example.com/')
}
