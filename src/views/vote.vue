<script lang="ts" setup>
const percentage = ref(50)

</script>

<template>
  <main>
    <MyHeader></MyHeader>  
    <div class="flex">
      <TaiwanMap></TaiwanMap>
      <section class="w-full px-48px">
        <h2>全臺縣市總統得票 </h2>
        <!-- 總統票數-->
        <div class="bg-#F3F4F4 p-4 pt-6 rounded-12px">
          <h3 class="text-20px font-bold">總統得票數</h3>
          <section class="w-full grid grid-cols-2 gap-4">
            <!-- 左側政黨 -->
            <div class="bg-white rounded-12px">
              <div class="grid grid-cols-3 ">
                <div>
                  德古拉
                </div>
                <div>
                  林克
                </div>
                <div>
                  綠巨魔
                </div>
              </div>
              <progress id="file" max="100" value="70">70%</progress>

            </div>
            <!-- 右側投票率 -->
            <div class="bg-white rounded-12px flex">
              <ProgressBar :percentage="percentage"></ProgressBar>
              <div class="flex">
                <div>
                  <div>
                    <p class="text-#64748B text-14px">投票數</p>
                    <p class="text-#334155 text-14px">12,448,302</p>
                  </div>
                  <div>
                    <p class="text-#64748B text-14px">有效投票率</p>
                    <p class="text-#334155 text-14px">12,284,970</p>
                  </div>
                </div>

                <div>
                  <div>
                    <p class="text-#64748B text-14px">投票率</p>
                    <p class="text-#334155 text-14px">66.27%</p>
                  </div>
                  <div>
                    <p class="text-#64748B text-14px">無效票數</p>
                    <p class="text-#334155 text-14px">12,284,970</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  </main>
</template>