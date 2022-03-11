<template>
  <AppBreadcrumb :path="path" :name="name" />
  <div class="server-info">
    <div class="server-info__map-image">
      <img :src="serverInfo.mapImage" alt="">
    </div>
    <h2 class="server-info__name">{{ serverInfo.name }}</h2>
    <div class="server-info__info">
      <img
        class="server-info__country"
        :src="serverInfo.countryFlag"
        alt=""
      />
      <p class="server-info__mode">{{ serverInfo.mode }}</p>
      <p class="server-info__map">{{ serverInfo.map }}</p>
      <p class="server-info__preset">{{ serverInfo.preset }}</p>
      <p class="server-info__tickrate">{{ serverInfo.tickrate }} hz</p>
    </div>
    <p class="server-info__descr">{{ serverInfo.descr }}</p>
    <div class="server-info__actions">
      <AppButton type="btn--secondary" text="join" />
      <AppButton type="btn--secondary" text="spectate" />
      <AppButton type="btn--secondary" text="join as commander" />
    </div>
    <ul class="server-info__stats">
      <li class="server-info__players">
        <h6 class="server-info__title">players</h6>
        <span>{{ serverInfo.players }}/64</span>
      </li>
      <li class="server-info__ping">
        <h6 class="server-info__title">ping</h6>
        <span>{{ serverInfo.ping }}ms</span>
      </li>
      <li class="server-info__tickrate">
        <h6 class="server-info__title">tickrate</h6>
        <span>{{ serverInfo.tickrate }} Hz</span>
      </li>
    </ul>
  </div>
</template>

<script>
import browserServers from "@/mocks/browserServers";
import AppBreadcrumb from '../components/ui/AppBreadcrumb.vue'
import { breadcrumbPath } from '@/use/breadcrumbPath'
import { useRoute } from 'vue-router';
import AppButton from "../components/ui/AppButton.vue";

export default {
  setup () {
    const route = useRoute()
    
    const serverInfo = browserServers.find(serverInfo => serverInfo.id == route.params.id)
    if (serverInfo) {
      serverInfo.value = serverInfo
    }

    return { 
      ...breadcrumbPath(),
      serverInfo,
    }
  },
  components: { AppBreadcrumb, AppButton }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.server-info {
  margin-top: 62px;

  &__map-image {
    margin-bottom: 15px;
  }

  &__name {
    margin-bottom: 16px;

    font-weight: 600;
    font-size: 3.6rem;
    line-height: 46px;
    letter-spacing: 0.06em;
  }

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    p {
      font-weight: 600;
      line-height: 1.8rem;
      letter-spacing: 0.06em;
      line-height: 23px;
      text-transform: uppercase;
      color: rgba(#fff, .8);

      &:not(:last-child):after {
        content: '-';
        margin: 0 5px;
      }
    }
  }

  &__country {
    margin-right: 8px;
  }

  &__descr {
    margin-bottom: 33px;

    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: 0.06em;
    line-height: 23px;
    color: rgba(#fff, .8);
  }

  &__actions {
    display: flex;
    margin-bottom: 27px;
    gap: 8px;

    .btn {
      min-width: 324px;
    }
  }

  &__stats {
    display: flex;
    gap: 132px;
  }

  &__players,
  &__ping,
  &__tickrate {
    .server-info__title {
      font-weight: 600;
      font-size: 1.8rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    span {
      font-weight: 600;
      font-size: 3rem;
      letter-spacing: 0.06em;
    }
  }
}
</style>