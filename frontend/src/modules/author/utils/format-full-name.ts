import { capitalize } from '@/lib/capitalize';

export const formatFullName = (
  firstName: string,
  middleName: string | null,
  lastName: string
) => {
  return `${capitalize(firstName)} ${middleName ? capitalize(middleName) + ' ' : ''}${lastName.toUpperCase()}`;
}