import { normalizeVN } from './normalizeVN'

const BASE_SYNONYMS: Record<string, string[]> = {
  'công việc': ['task'],
  'nhật ký': ['log'],
  'loại việc': ['worktype'],
  'nhóm chat': ['group', 'group chat'],
  'bắt đầu nhanh': ['quick start'],
}

export const synonymMap: Record<string, string[]> = Object.fromEntries(
  Object.entries(BASE_SYNONYMS).map(([key, values]) => [
    normalizeVN(key),
    values.map((value) => normalizeVN(value)),
  ]),
)
