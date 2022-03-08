import {useRoute} from "vue-router";

export function breadcrumbPath() {
  const route = useRoute()

  const path = route.matched[0].path
  const name = route.matched[0].name

  return { path, name }
}