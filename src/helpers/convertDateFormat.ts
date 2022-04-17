// import dayjs from 'dayjs'

// type DateParam = string | number | dayjs.Dayjs | Date | null

export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'HH:mm'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`
export const HUMAN_READABLE_DATE_FORMAT = 'DD MMM YYYY'

export const fallbackString = (stringValue?: string | null): string => stringValue || ''

// export const formatDate = (date?: DateParam | Date, format = HUMAN_READABLE_DATE_FORMAT) => dayjs(date).format(format)
