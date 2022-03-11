import {useRouter} from "vue-router";

export function backPage() {
  const router = useRouter()

  const backPage = () => {
    router.back()
  }

  return { backPage }
}
