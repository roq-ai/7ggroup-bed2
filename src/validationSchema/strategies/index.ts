import * as yup from 'yup';

export const strategyValidationSchema = yup.object().shape({
  type: yup.string().required(),
  content: yup.string().required(),
  business_id: yup.string().nullable(),
});
