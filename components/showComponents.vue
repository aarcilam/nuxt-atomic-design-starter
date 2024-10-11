<script setup lang="ts">
import type { CardItem } from '~/components/shared/molecules/Card.vue';
import registerForm from './auth/schemas/register.form';
import ExampleModal from '~/components/shared/ExampleModal.vue';

const { showModal } = useModal();
const openModal = async () => {
  const result = await showModal(ExampleModal);
  console.log(result);
}
const pugData: CardItem[] = [
  {
    title: "Happy Pug",
    description: "A happy pug sitting on a couch.",
    price: '$20',
    image: "https://www.infobae.com/resizer/v2/I5RSZR65RVEZRGA3ZFR6JLUWVI.jpg?auth=9631db2770289843949bb4011c574f1aaca63e51b9b0851a3a40bc233b98bcb5&smart=true&width=992&height=558&quality=85",
    id: 1
  },
  {
    title: "Sleepy Pug",
    description: "A sleepy pug lying on a soft bed.",
    price: '$20',
    image: "https://www.infobae.com/resizer/v2/I5RSZR65RVEZRGA3ZFR6JLUWVI.jpg?auth=9631db2770289843949bb4011c574f1aaca63e51b9b0851a3a40bc233b98bcb5&smart=true&width=992&height=558&quality=85",
    id: 2
  },
  {
    title: "Playful Pug",
    description: "A playful pug enjoying some time outdoors.",
    price: '$20',
    image: "https://www.infobae.com/resizer/v2/I5RSZR65RVEZRGA3ZFR6JLUWVI.jpg?auth=9631db2770289843949bb4011c574f1aaca63e51b9b0851a3a40bc233b98bcb5&smart=true&width=992&height=558&quality=85",
    id: 3
  },
  {
    title: "Curious Pug",
    description: "A curious pug looking up with a tilted head.",
    price: '$20',
    image: "https://www.infobae.com/resizer/v2/I5RSZR65RVEZRGA3ZFR6JLUWVI.jpg?auth=9631db2770289843949bb4011c574f1aaca63e51b9b0851a3a40bc233b98bcb5&smart=true&width=992&height=558&quality=85",
    id: 4
  },
  {
    title: "Pug with a Hat",
    description: "A cute pug wearing a small hat.",
    price: '$20',
    image: "https://www.infobae.com/resizer/v2/I5RSZR65RVEZRGA3ZFR6JLUWVI.jpg?auth=9631db2770289843949bb4011c574f1aaca63e51b9b0851a3a40bc233b98bcb5&smart=true&width=992&height=558&quality=85",
    id: 5
  }
];
</script>
<template>
  <div class="p-5">
    <SharedAtomsHeading1 class="text-xl font-bold mb-3">Componentes</SharedAtomsHeading1>
    <hr class="mb-5">

    <!-- Átomos -->
    <SharedAtomsCollapsableCard :open="true" title="Átomos" class="mb-5">
      <SharedAtomsCollapsableCard :open="true" title="Colores" class="mb-3 bg-base-100">
        <div class="flex gap-4">
          <div class="w-9 h-9 bg-primary rounded"></div>
          <div class="w-9 h-9 bg-secondary rounded"></div>
          <div class="w-9 h-9 bg-neutral rounded"></div>
          <div class="w-9 h-9 bg-accent rounded"></div>
        </div>
      </SharedAtomsCollapsableCard>
      <SharedAtomsCollapsableCard :open="true" title="Textos" class="mb-3 bg-base-100">
        <div class="space-y-3">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<SharedAtomsHeading1 class="text-lg">Heading 1</SharedAtomsHeading1>' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedAtomsHeading1 class="text-lg">Heading 1</SharedAtomsHeading1>
          <SharedAtomsHeading2 class="text-base">Heading 2</SharedAtomsHeading2>
          <SharedAtomsBodyText class="text-sm text-gray-700">Body Text: Lorem ipsum dolor sit amet consectetur
            adipisicing elit...</SharedAtomsBodyText>
        </div>
      </SharedAtomsCollapsableCard>
      <SharedAtomsCollapsableCard :open="true" title="Botones" class="mb-3 bg-base-100">
        <div class="space-y-2 ">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='
          <SharedAtomsButton>I´m a primary button</SharedAtomsButton>
          <SharedAtomsButton color="secondary">I´m a secondary button</SharedAtomsButton>
          <SharedAtomsButton color="accent">I´m an accent button</SharedAtomsButton>
          <SharedAtomsButton color="neutral">I´m a neutral button</SharedAtomsButton>' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedAtomsButton @click="openModal()">I´m a primary button</SharedAtomsButton>
          <SharedAtomsButton color="secondary">I´m a secondary button</SharedAtomsButton>
          <SharedAtomsButton color="accent">I´m an accent button</SharedAtomsButton>
          <SharedAtomsButton color="neutral">I´m a neutral button</SharedAtomsButton>
        </div>
      </SharedAtomsCollapsableCard>
      <SharedAtomsCollapsableCard :open="true" title="Inputs" class="mb-3 bg-base-100">
        <div class="space-y-3">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='
          <SharedAtomsFormsFieldsTextInput name="textinput" id="textinput" label="Text input" />
          <SharedAtomsFormsFieldsTextArea name="textareainput" id="textareainput" label="Text Area" />
          <SharedAtomsFormsFieldsPhoneInput name="phoneinput" id="phoneinput" label="Phone Input" />
          <SharedAtomsFormsFieldsPassInput name="passinput" id="passinput" label="Password Input" />
          <SharedAtomsFormsFieldsFileInput name="fileinput" id="fileinput" label="File Input" />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedAtomsFormsFieldsTextInput name="textinput" id="textinput" label="Text input" />
          <SharedAtomsFormsFieldsTextArea name="textareainput" id="textareainput" label="Text Area" />
          <SharedAtomsFormsFieldsPhoneInput name="phoneinput" id="phoneinput" label="Phone Input" />
          <SharedAtomsFormsFieldsPassInput name="passinput" id="passinput" label="Password Input" />
          <SharedAtomsFormsFieldsFileInput name="fileinput" id="fileinput" label="File Input" />
        </div>
      </SharedAtomsCollapsableCard>
    </SharedAtomsCollapsableCard>

    <!-- Moléculas -->
    <SharedAtomsCollapsableCard :open="true" title="Moléculas" class="mb-5">
      <div class="grid grid-cols-1 gap-4">
        <SharedAtomsCollapsableCard title="Nav" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<SharedMoleculesNav></SharedMoleculesNav>' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedMoleculesNav></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-primary"></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-secondary" :cart="true"></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-neutral text-white" :lang="true" :cart="true"></SharedMoleculesNav>
        </SharedAtomsCollapsableCard>
        <SharedAtomsCollapsableCard title="Cards" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<SharedMoleculesCard 
          v-for="(pug, index) in pugData" 
          :key="index" 
          class="w-full" 
          :title="pug.title" 
          :description="pug.description" 
          :image="pug.image" 
          :id="pug.id" />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <div class="grid gap-3">
            <SharedMoleculesCard v-for="(pug, index) in pugData" :key="index" class="w-full" :title="pug.title"
              :description="pug.description" :image="pug.image" :id="pug.id" />
            <SharedMoleculesCard class="w-full" :glass="true" :title="pugData[0].title"
              :description="pugData[0].description" :image="pugData[0].image" :id="pugData[0].id" />
            <SharedMoleculesCard class="w-full" :side="true" :title="pugData[0].title"
              :description="pugData[0].description" :image="pugData[0].image" :id="pugData[0].id" />
          </div>
        </SharedAtomsCollapsableCard>
        <SharedAtomsCollapsableCard title="Iconos" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<SharedAtomsIcon icon="cart"></SharedAtomsIcon>' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedAtomsIcon icon="cart"></SharedAtomsIcon>
        </SharedAtomsCollapsableCard>
        <SharedAtomsCollapsableCard title="Form contructor" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          Use a object like this
          <SharedMoleculesMockupCode :code='registerForm()' lang="js" />
          Pass to the component like this
          <SharedMoleculesMockupCode code='<SharedMoleculesFormsFormCreator 
          :form-config="registerForm()" 
          submit-label="Registrar" 
          />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <SharedMoleculesFormsFormCreator :form-config="registerForm()" submit-label="Registrar"></SharedMoleculesFormsFormCreator>
        </SharedAtomsCollapsableCard>
      </div>
    </SharedAtomsCollapsableCard>

    <!-- Organismos -->
    <SharedAtomsCollapsableCard :open="true" title="Organismos (BLOCKS)" class="mb-5">
      <div class="space-y-5">
        <SharedAtomsCollapsableCard title="Card Grid" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<BlocksGridCardSection :items="pugData" type="basic" :full-img="true" class="mb-5" />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <BlocksGridCardSection :items="pugData" type="basic" :full-img="true" class="mb-5" />
          <BlocksGridCardSection :items="pugData" type="product" class="mb-5" />
        </SharedAtomsCollapsableCard>
        <SharedAtomsCollapsableCard title="Slider" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<BlocksSlider class="mb-5" />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <BlocksSlider class="mb-5" />
        </SharedAtomsCollapsableCard>
        <SharedAtomsCollapsableCard title="Carrousel" class="mb-3 bg-base-100">
          <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
          <SharedMoleculesMockupCode code='<BlocksCardsCarrousel :items="pugData" type="product" :full-img="true" class="mb-5" />' />
          <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
          <hr>
          <BlocksCardsCarrousel :items="pugData" type="basic" class="mb-5" />
          <BlocksCardsCarrousel :items="pugData" type="product" :full-img="true" class="mb-5" />
        </SharedAtomsCollapsableCard>
      </div>
    </SharedAtomsCollapsableCard>
  </div>
</template>

