<template>
  <div>
    <div class="visualiser__chart__container">
      <LineChart
        class="visualiser__chart"
        :dataset="dataset"
        :pending="pending"
        :label="func.name"
      />
    </div>

    <VContainer>
      <VRow align-start>
        <VCol
          lg="3"
          sm="6"
          cols="12"
        >
          <VCard>
            <VCardTitle class="visualiser__title">
              Основные параметры графика
            </VCardTitle>

            <VCardText>
              <VTextField
                v-model.number="delta"
                :disabled="pending"
                label="Дельта"
              />

              <VTextField
                v-model.number="min"
                :disabled="pending"
                label="Минимум"
              />
              <VTextField
                v-model.number="max"
                :disabled="pending"
                label="Максимум"
              />
            </VCardText>

            <VCardActions>
              <VBtn
                color="primary"
                :disabled="pending"
                @click="calc"
              >
                Пересчитать
              </VBtn>
            </VCardActions>
          </VCard>
        </VCol>

        <VCol
          lg="3"
          sm="6"
          cols="12"
        >
          <VCard>
            <VCardTitle class="visualiser__title">
              Итерируемая переменная
            </VCardTitle>

            <VCardText>
              <VRadioGroup v-model="nowVar">
                <VRadio
                  v-for="(variable, key) in func.variables"
                  :key="key"
                  :value="key"
                  :disabled="pending"
                  :label="variable.name || variable.description"
                />
              </VRadioGroup>
            </VCardText>
          </VCard>
        </VCol>

        <VCol
          lg="3"
          cols="12"
        >
          <VCard>
            <VCardTitle class="visualiser__title">
              Параметры функции
            </VCardTitle>

            <VCardSubtitle v-if="func.view">
              Функция вида {{ func.view }}
            </VCardSubtitle>

            <VCardText>
              <VRow>
                <VCol
                  v-for="(variable, key) in func.variables"
                  :key="key"
                  cols="6"
                >
                  <VTextField
                    v-model.number="variables[key]"
                    :disabled="key === nowVar || pending"
                    :label="variable.name"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>

        <VCol
          v-show="isShowComputed"
          lg="3"
          col="12"
        >
          <VCard>
            <VCardTitle>
              Вычисляемые параметры
            </VCardTitle>

            <VCardText>
              <VRow>
                <VCol
                  v-for="(variable, key) in func.computed"
                  :key="key"
                  cols="6"
                >
                  <VTextField
                    :value="funcComputed[key]"
                    readonly
                    :label="variable.name"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>

    </VContainer>
  </div>
</template>

<script src="./index.js" />

<style
  src="./index.styl"
  lang="stylus"
  scoped
/>
