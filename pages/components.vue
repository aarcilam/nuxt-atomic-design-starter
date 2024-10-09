<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <SharedAtomsHeading1>Componentes</SharedAtomsHeading1>
      <hr>
      <div class="mt-5">
        <SharedAtomsHeading1>- Atomos</SharedAtomsHeading1>
        <div class="w-96 p-5 flex">
          <div class="w-9 h-9 bg-primary"></div>
          <div class="w-9 h-9 bg-secondary"></div>
          <div class="w-9 h-9 bg-neutral"></div>
          <div class="w-9 h-9 bg-accent"></div>
        </div>
        <SharedAtomsHeading1>Heading 1</SharedAtomsHeading1>
        <SharedAtomsHeading2>Heading 2</SharedAtomsHeading2>
        <SharedAtomsBodyText>Body Text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est mollitia
          aperiam accusamus in odit doloremque nisi architecto perferendis laboriosam. Voluptatibus amet, numquam
          repellat
          illo dignissimos commodi maxime tempore magnam.</SharedAtomsBodyText>
        <br><br>
        <SharedAtomsHeading2>Buttons</SharedAtomsHeading2>
        <br> <br>
        <SharedAtomsButton>I´m a primary button</SharedAtomsButton>
        <br><br>
        <SharedAtomsButton color="secondary">I´m a secondary button</SharedAtomsButton>
        <br><br>
        <SharedAtomsButton color="accent">I´m a accent button</SharedAtomsButton>
        <br><br>
        <SharedAtomsButton color="neutral">I´m a neutral button</SharedAtomsButton>
        <br><br>
        <div class="p-5 w-[500px]">
          <SharedAtomsCardContainer>
            <SharedAtomsHeading2>Card container</SharedAtomsHeading2>
          </SharedAtomsCardContainer>
        </div>
        <div class="p-5 w-[500px]">
          <SharedAtomsCollapsableCard title="Collapsible Card container">
            <SharedAtomsBodyText>Body</SharedAtomsBodyText>
          </SharedAtomsCollapsableCard>
        </div>
        <SharedAtomsIcon icon="cart"></SharedAtomsIcon>
        <br><br>
        <SharedAtomsHeading2>Form inputs</SharedAtomsHeading2>
        <div class="w-96 p-5">
          <SharedAtomsFormsFieldsTextInput name="textinput" id="textinput" label="Text input"></SharedAtomsFormsFieldsTextInput>
          <SharedAtomsFormsFieldsTextArea></SharedAtomsFormsFieldsTextArea>
          <SharedAtomsFormsFieldsPhoneInput></SharedAtomsFormsFieldsPhoneInput>
          <SharedAtomsFormsFieldsPassInput></SharedAtomsFormsFieldsPassInput>
          <SharedAtomsFormsFieldsFileInput></SharedAtomsFormsFieldsFileInput>

        </div>
      </div>
      <hr>
      <div class="mt-5">
        <SharedAtomsHeading2>Moleculas</SharedAtomsHeading2>
      </div>
    </div>
  </NuxtLayout>
</template>