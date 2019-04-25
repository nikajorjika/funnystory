<template>
  <div>
    <n-container>
      <n-layout>
        <n-flex class="n-col-2 n-mx-5">

        </n-flex>
        <n-flex class="n-col-8 n-mx-5">
          <feed-list-component/>
        </n-flex>
        <n-flex class="n-col-2 n-mx-5">
          <n-card>
            <template v-slot:header>
              <div>Header</div>
            </template>
          </n-card>
        </n-flex>
      </n-layout>
    </n-container>
  </div>
</template>

<script>
import FeedListComponent from '../../components/Feed'
export default {
  components: { FeedListComponent }
}
</script>
