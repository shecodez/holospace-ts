import { ref, computed, watch } from 'vue';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'vue-router';

export type UseApiServerResponse = {
  isLoading: boolean;
  errorDetails: [];
  errorFields: {};
  errorMessage: string;
};

export const useApi = (endpoint: string, access_token?: string) => {
  const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1', // TODO: process.env.VUE_APP_API_URL
    headers: {
      Authorization: access_token ? `Bearer ${access_token}` : undefined,
    },
  });

  const data = ref();
  const isLoading = ref(false);
  const error = ref();

  const errorDetails = computed(() => {
    if (error.value && error.value.response) {
      return error.value.response.data.message;
    }
  });

  const errorFields = computed(() => {
    if (error.value && Array.isArray(error.value.response.data.message)) {
      return (error.value.response.data.message as string[]).reduce((acc: Record<string, any>, msg: string) => {
        const [field] = msg.split(' ');
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(msg);
        return acc;
      }, {}); // eg. { email: [ 'email is required' ] }
    }
  });

  const errorMessage = computed(() => {
    if (error.value) {
      return error.value.message;
    }
  });

  const get = (query?: Record<string, any>, config?: AxiosRequestConfig) => {
    isLoading.value = true;
    error.value = undefined;

    let queryString = '';

    if (query) {
      queryString =
        '?' +
        Object.entries(query)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
    }

    return api
      .get(endpoint + queryString, config)
      .then((res) => (data.value = res.data))
      .catch((err) => {
        err.value = err;
        console.error(err);
      })
      .finally(() => (isLoading.value = false));
  };

  const post = (payload?: Record<string, any>) => {
    isLoading.value = true;
    error.value = undefined;

    return api
      .post(endpoint, payload)
      .then((res) => (data.value = res.data))
      .catch((err) => {
        error.value = err;
        console.error(err); // throw err;
      })
      .finally(() => (isLoading.value = false));
  };

  // @ts-ignore
  const del = () => {
    isLoading.value = true;
    error.value = undefined;

    return api
      .delete(endpoint)
      .then((res) => (data.value = res.data))
      .catch((err) => {
        error.value = err;
        console.error(err); // throw err;
      })
      .finally(() => (isLoading.value = false));
  };

  const router = useRouter();

  watch([error], () => {
    // If 401 Unauthorised, redirect to login // TODO: store path to go back after login
    if (error.value.response.status === 401 && router) {
      router.push('/login');
    }
  });

  return {
    data,
    isLoading,
    error,
    errorDetails,
    errorFields,
    errorMessage,
    get,
    post,
    del,
  };
};
