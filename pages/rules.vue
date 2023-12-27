<template>
  <v-row justify="center" align="center">
    <!-- Main info -->
    <div cols="12" class="ma-0 mt-8" style="width: 100%">
      <div class="tt fw-400 text--primary fs-175 uppercase mb-4 text-center w-100">Правила</div>
        <div class="pr-4 pl-4 w-100">
          <v-img src="/peremoha/hr2-blue.svg" width="420px" class="margin-auto" style="min-width: 50%;"></v-img>
        </div>
        <!-- Short description -->
        <v-row>
          <v-col cols="12" md="6" class="margin-auto">
          <v-card width="100%" class="elevation-0">
            <v-card-text class="fs-120" :class="{ 'text-justify': $vuetify.breakpoint.mdAndUp }">
              <div class="d-flex mb-6">
                <v-img src="/peremoha/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Придбати лот можливо тільки безготівковим розрахунком;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/peremoha/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">У разі неможливості безготівкової оплати учаснику аукціону буде виписаний вексель і буде можливість здійснити транзакцію протягом 72 годин. Розрахунок має здійснюватися за реквізитами, наведеними нижче;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/peremoha/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Для участі в аукціоні необхідно зареєструватися та отримати номер учасника торгів;</div>
              </div>

              <div class="d-flex mb-6">
                <v-img src="/peremoha/bullet-blue.svg" width="20" style="max-width: 20px; max-height: 20px;" class="mr-6"></v-img>
                <div class="flex-grow">Якщо зареєстрований учасник аукціону не може бути присутнім на торгах особисто, він може взяти участь у торгах телефоном, торгуватися online або залишити заочні біди</div>
              </div>

              <div class="d-flex flex-column mb-6 mt-9">
                <div class="uppercase fs-150 mb-8 text-center" style="line-height: 1.2;">Реквізити Благодійного Фонду<br/>«Рідна Оболонь»</div>
                <div class="fs-80">
                  <p class="fs-120"><strong><span class="primary--text mr-4">€</span> Реквізити в ЄВРО</strong></p>
                  <p>Реквізити для поповнення поточного рахунку в ЄВРО через Raiffeisen Bank International:</p>
                  <p><strong>Intermediary bank:</strong> Raiffeisen Bank International AG, Vienna, Avstria</p>
                  <p><strong>SWIFT:</strong> RZBAATWW</p>
                  <p><strong>Beneficiary’s bank:</strong> JSC ’Ukrainian capital’ bank Kiev, Ukraine Acc. 55.071.625</p>
                  <p><strong>EUR SWIFT Code:</strong></p> UKCA UA UK</p>
                  <p><strong>Beneficiary acc.:</strong> 260043105600</p>
                  <p><strong>IBAN:</strong> UA933203710000000260043105600</p>
                  <p><strong>Beneficiary Name:</strong> CO CF RIDNA OBOLON</p>
                  <p><strong>Remittance Information:</strong> Private transfer  for CO CF RIDNA OBOLON</p>
                  <p><strong>ident. сode:</strong> 44529473</p>
                </div>
              </div>

              <div class="d-flex flex-column mb-6 mt-9">
                <div class="fs-80">
                  <p class="fs-120"><strong><span class="primary--text mr-4">$</span> Реквізити в ДОЛАРАХ США</strong></p>
                  <p>Реквізити для поповнення поточного рахунку в ДОЛАРАХ США через Raiffeisen Bank International:</p>
                  <p><strong>Intermediary bank:</strong> Raiffeisen Bank International AG, Vienna, Avstria</p>
                  <p><strong>SWIFT:</strong> RZBAATWW</p>
                  <p><strong>Beneficiary’s bank:</strong> JSC ’Ukrainian capital’ bank Kiev, Ukraine Acc. 55.071.625</p>
                  <p><strong>EUR SWIFT Code:</strong></p> UKCA UA UK</p>
                  <p><strong>Beneficiary acc.:</strong> 260043105600</p>
                  <p><strong>IBAN:</strong> UA933203710000000260043105600</p>
                  <p><strong>Remittance Information:</strong> Private transfer  for CO CF RIDNA OBOLON</p>
                  <p><strong>ident. сode:</strong> 44529473</p>
                </div>
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
<style>
.fs-100 { font-size: 100% !important; }
</style>