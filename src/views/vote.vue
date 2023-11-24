<script lang="ts" setup>
const percentage = ref(50)
</script>

<template>
  <main>
    <MyHeader />
    <div class="flex">
      <TaiwanMap />
      <section class="w-full px-48px">
        <h2>全臺縣市總統得票 </h2>
        <!-- 總統票數 -->
        <div class="bg-#F3F4F4 p-4 pt-6 rounded-12px mb-6">
          <h3 class="text-20px font-bold">
            總統得票數a
          </h3>
          <section class="w-full grid grid-cols-2 gap-4">
            <!-- 左側政黨 -->
            <div class="bg-white rounded-12px b-4">
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
              <progress id="file" max="100" value="70">
                70%
              </progress>
            </div>
            <!-- 右側投票率 -->
            <div class="bg-white rounded-12px flex">
              <ProgressBar :percentage="percentage" />
              <div class="flex">
                <div>
                  <div>
                    <p class="text-#64748B text-14px">
                      投票數
                    </p>
                    <p class="text-#334155 text-14px">
                      12,448,302
                    </p>
                  </div>
                  <div>
                    <p class="text-#64748B text-14px">
                      有效投票率
                    </p>
                    <p class="text-#334155 text-14px">
                      12,284,970
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p class="text-#64748B text-14px">
                      投票率
                    </p>
                    <p class="text-#334155 text-14px">
                      66.27%
                    </p>
                  </div>
                  <div>
                    <p class="text-#64748B text-14px">
                      無效票數
                    </p>
                    <p class="text-#334155 text-14px">
                      12,284,970
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- 總統票數 -->
        <div class="w-full grid grid-cols-2 gap-4 mb-10">
          <div class="b b-#DEE2E6 rounded-12px">
            <h3 class="text-20px font-bold px-4 pt-6">
              歷屆政黨得票數
            </h3>
            <GroupBarChat />
          </div>
          <div class="b b-#DEE2E6 rounded-12px">
            <h3 class="text-20px font-bold px-4 pt-6">
              歷屆政黨得票率
            </h3>
            <LineChat />
          </div>
        </div>
        <!-- 各區域投票總攬 -->
        <div>
          <h3 class="text-20px font-bold pt-6 mb-2">
            各區域投票總覽
          </h3>
          <TableChart />
        </div>
      </section>
    </div>
  </main>
</template>
