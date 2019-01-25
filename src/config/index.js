import { findValue } from 'src/utils';
import api from './api';

export default function config(key, fallback) {
  return findValue(key, {
    api,
  }) || fallback;
}
