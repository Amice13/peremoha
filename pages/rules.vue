<template>
  <v-row justify="center" align="center">
    <!-- Main info -->
    <div cols="12" class="ma-0 mt-8" style="width: 100%">
      <div class="tt fw-400 text--primary fs-175 uppercase mb-4 text-center w-100">Правила</div>
        <div class="pr-4 pl-4 w-100">
          <v-img src="/hr2-blue.svg" width="420px" class="margin-auto" style="min-width: 50%;"></v-img>
        </div>
        <!-- Short description -->
        <v-row>
          <v-col cols="12" md="6" class="margin-auto">
          <v-card width="100%" class="elevation-0">
            <v-card-text class="fs-120" :class="{ 'text-justify': $vuetify.breakpoint.mdAndUp }">
              <div class="d-flex mb-6">
                <v-img src="/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Придбати лот можливо тільки безготівковим розрахунком;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">У разі неможливості безготівкової оплати учаснику аукціону буде виписаний вексель і буде можливість здійснити транзакцію протягом 72 годин;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Для участі в аукціоні необхідно зареєструватися та отримати номер учасника торгів;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Якщо зареєстрований учасник аукціону не може бути присутнім на торгах особисто, він може взяти участь у торгах телефоном, торгуватися online або залишити заочні ставки</div>
              </div>
              <v-row class="mt-12 mb-8">
                <v-col cols="12" class="text-center">
                  <v-btn class="margin-auto mb-2" color="primary" router to="/">Повернутся на головну</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>

<script>
export default {
  transition: 'fade',
  name: 'rulesPage'
}
</script>
