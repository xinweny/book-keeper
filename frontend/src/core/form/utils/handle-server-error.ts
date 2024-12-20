import toast from 'react-hot-toast';
import { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { ServerError } from '@/core/api/types/server-error';

export const handleServerError = <T extends FieldValues>(args: {
  error: ServerError,
  setError: UseFormSetError<T>,
  fieldMap: Record<string, Path<T>>
}) => {
  const { error, setError, fieldMap } = args;

  toast.error(error.message);

  if (error.data) {
    Object.keys(error.data).map(key => {
      setError(fieldMap[key], { message: error.data[key].join('\n') });
    });
  }
};