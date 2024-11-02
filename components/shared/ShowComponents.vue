<script setup lang="ts">
import Modal from './Modal.vue';

const { showModal, showDrawer, showToast } = useStack()
const openModal = async () => {
  const result = await showModal(Modal);
  console.log(result);
}

const openDrawer = async (side) => {
  const result = await showDrawer(Modal, { position: side });
  console.log(result);
}

const openToast = async (side) => {
  const result = await showToast(Modal, { position: side });
  console.log(result);
}

const data = await queryContent('/pugs').findOne()
const pugData: any = data.body

const blogs = await queryContent('/blog').find()
const router = useRouter();

const navigateBlogs = (item) => {
  router.push(`/blog/${item.slug}`);
}
</script>
<template>
  <div class="p-5">
    <SharedAtomsHeading1 class="text-xl font-bold mb-3">Componentes</SharedAtomsHeading1>
    <hr class="mb-5">
    <!-- Átomos -->
    <SharedAtomsCollapsableCard :open="true" title="Átomos" class="mb-5">
      <SharedMoleculesComponentDocumentator title="Colores" code='
            <div class="flex gap-4">
              <div class="w-9 h-9 bg-primary rounded"></div>
              <div class="w-9 h-9 bg-secondary rounded"></div>
              <div class="w-9 h-9 bg-neutral rounded"></div>
              <div class="w-9 h-9 bg-accent rounded"></div>
            </div>
          '>
        <div class="flex gap-4">
          <div class="w-9 h-9 bg-primary rounded"></div>
          <div class="w-9 h-9 bg-secondary rounded"></div>
          <div class="w-9 h-9 bg-neutral rounded"></div>
          <div class="w-9 h-9 bg-accent rounded"></div>
        </div>
      </SharedMoleculesComponentDocumentator>

      <SharedMoleculesComponentDocumentator title="Titles" code='
          <SharedAtomsHeading1 class="text-lg">Heading 1</SharedAtomsHeading1>
          <SharedAtomsHeading2 class="text-base">Heading 2</SharedAtomsHeading2>
          <SharedAtomsBodyText class="text-sm text-gray-700">Body Text: Lorem ipsum dolor sit amet consectetur adipisicing elit...</SharedAtomsBodyText>
        '>
        <SharedAtomsHeading1 class="text-lg">Heading 1</SharedAtomsHeading1>
        <SharedAtomsHeading2 class="text-base">Heading 2</SharedAtomsHeading2>
        <SharedAtomsBodyText class="text-sm text-gray-700">Body Text: Lorem ipsum dolor sit amet consectetur adipisicing
          elit...</SharedAtomsBodyText>
      </SharedMoleculesComponentDocumentator>

      <SharedMoleculesComponentDocumentator title="Botones" code='
            <SharedAtomsButton @click="openModal()">I´m a primary button</SharedAtomsButton>
            <SharedAtomsButton color="secondary">I´m a secondary button</SharedAtomsButton>
            <SharedAtomsButton color="accent">I´m an accent button</SharedAtomsButton>
            <SharedAtomsButton color="neutral">I´m a neutral button</SharedAtomsButton>
          '>
        <SharedAtomsButton @click="openModal()">I´m a primary button</SharedAtomsButton>
        <SharedAtomsButton @click="openDrawer('left')" color="secondary">I´m a secondary button</SharedAtomsButton>
        <SharedAtomsButton color="accent">I´m an accent button</SharedAtomsButton>
        <SharedAtomsButton color="neutral">I´m a neutral button</SharedAtomsButton>
      </SharedMoleculesComponentDocumentator>

      <SharedMoleculesComponentDocumentator title="Inputs" code='
            <SharedAtomsFormsFieldsTextInput name="textinput" id="textinput" label="Text input" />
            <SharedAtomsFormsFieldsTextArea name="textareainput" id="textareainput" label="Text Area" />
            <SharedAtomsFormsFieldsPhoneInput name="phoneinput" id="phoneinput" label="Phone Input" />
            <SharedAtomsFormsFieldsPassInput name="passinput" id="passinput" label="Password Input" />
            <SharedAtomsFormsFieldsFileInput name="fileinput" id="fileinput" label="File Input" />
          '>
        <SharedAtomsFormsFieldsTextInput name="textinput" id="textinput" label="Text input" />
        <SharedAtomsFormsFieldsTextArea name="textareainput" id="textareainput" label="Text Area" />
        <SharedAtomsFormsFieldsPhoneInput name="phoneinput" id="phoneinput" label="Phone Input" />
        <SharedAtomsFormsFieldsPassInput name="passinput" id="passinput" label="Password Input" />
        <SharedAtomsFormsFieldsFileInput accep=".png,.jpg" name="fileinput" id="fileinput" label="File Input" />
      </SharedMoleculesComponentDocumentator>
    </SharedAtomsCollapsableCard>

    <!-- Moléculas -->
    <SharedAtomsCollapsableCard :open="true" title="Moléculas" class="mb-5">
      <div class="grid grid-cols-1 gap-4">
        <SharedMoleculesComponentDocumentator title="Nav" code='<SharedMoleculesNav></SharedMoleculesNav>'>
          <SharedMoleculesNav></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-primary" alignment="right"></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-secondary" alignment="center" :cart="true"></SharedMoleculesNav>
          <SharedMoleculesNav class="bg-neutral text-white" alignment="left" :lang="true" :cart="true"></SharedMoleculesNav>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Nav" code='<SharedMoleculesTable :columns="" :rows=""></SharedMoleculesTable>'>
          <SharedMoleculesTable 
            :columns="[
              { label: 'Name', field: 'name' },
              { label: 'Job', field: 'job' },
              { label: 'Favorite Color', field: 'favoriteColor' },
            ]" 
            :rows="[
              {
                name: 'Hart Hagerty',
                location: 'United States',
                job: 'Zemlak, Daniel and Leannon',
                position: 'Desktop Support Technician',
                avatar: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
                favoriteColor: 'Purple',
              },
              {
                name: 'Brice Swyre',
                location: 'China',
                job: 'Carroll Group',
                position: 'Tax Accountant',
                avatar: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
                favoriteColor: 'Red',
              },
              {
                name: 'Marjy Ferencz',
                location: 'Russia',
                job: 'Rowe-Schoen',
                position: 'Office Assistant I',
                avatar: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
                favoriteColor: 'Crimson',
              },
              {
                name: 'Yancy Tear',
                location: 'Brazil',
                job: 'Wyman-Ledner',
                position: 'Community Outreach Specialist',
                avatar: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
                favoriteColor: 'Indigo',
              },
             ]" >
                 <template #start="{ row, column }">
                  <div v-if="column.field === 'name'" class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img :src="row.avatar" alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </template>
                <template #end="{ row, column }">
                  <span v-if="column.field === 'job'" class="badge badge-ghost badge-sm">{{ row.position }}</span>
                </template>
                <template #actions="{ row }">
                  <button class="btn btn-ghost btn-xs">View</button>
                </template>
          </SharedMoleculesTable>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Cards"
          code='<SharedMoleculesCard v-for="(pug, index) in pugData" :key="index" class="w-full" :title="pug.title" :description="pug.description" :image="pug.image" :id="pug.id" />'>
          <div class="grid gap-3">

          </div>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Iconos" code='<SharedAtomsIcon icon="cart"></SharedAtomsIcon>'>
          <SharedAtomsIcon icon="cart"></SharedAtomsIcon>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Form Constructor" code='
              <SharedMoleculesFormsFormCreator 
                :form-config="registerForm()" 
                submit-label="Registrar" 
              />
            '>
          <MyRegisterForm></MyRegisterForm>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Modal" code='
          <SharedAtomsButton @click="openModal()">Open modal</SharedAtomsButton>
            '>
          <SharedAtomsButton @click="openModal()">Open modal</SharedAtomsButton>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Drawer" code='
          <SharedAtomsButton @click="openDrawer()">Open Drawer</SharedAtomsButton>
            '>
          <SharedAtomsButton @click="openDrawer('left')">Open Drawer left</SharedAtomsButton>
          <SharedAtomsButton @click="openDrawer('right')" color="secondary">Open Drawer right</SharedAtomsButton>
          <SharedAtomsButton @click="openDrawer('bottom')" color="accent">Open Drawer bottom</SharedAtomsButton>
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Toast" code='
          <SharedAtomsButton @click="openToast()">Open Toast</SharedAtomsButton>
            '>
          <SharedAtomsButton @click="openToast('top-end')">Open Toast top-end</SharedAtomsButton>
          <SharedAtomsButton @click="openToast('bottom-end')">Open Toast bottom-end</SharedAtomsButton>
          <SharedAtomsButton @click="openToast('top-start')">Open Toast top-start</SharedAtomsButton>
          <SharedAtomsButton @click="openToast('bottom-start')">Open Toast bottom-start</SharedAtomsButton>
        </SharedMoleculesComponentDocumentator>
      </div>
    </SharedAtomsCollapsableCard>

    <!-- Organismos -->
    <SharedAtomsCollapsableCard :open="true" title="Organismos (BLOCKS)" class="mb-5">
      <div class="space-y-5">
        <SharedMoleculesComponentDocumentator title="Card Grid"
          code='<BlocksGridCardSection :items="pugData" type="basic" :full-img="true" class="mb-5" />'>
          <BlocksGridCardSection :items="blogs" @item-clicked="navigateBlogs" type="basic" :full-img="true"
            class="mb-5" />
          <BlocksGridCardSection :items="pugData" type="product" class="mb-5" />
        </SharedMoleculesComponentDocumentator>

        <SharedMoleculesComponentDocumentator title="Slider" code='<BlocksSlider class="mb-5" />'>
          <BlocksSlider class="mb-5" />
        </SharedMoleculesComponentDocumentator>
      </div>
    </SharedAtomsCollapsableCard>
  </div>
</template>
