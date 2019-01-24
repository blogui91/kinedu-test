import api from './api'
import { findValue } from 'src/utils'

export default function config (key, fallback) {
  return findValue(key, {
    api
  }) || fallback
}
