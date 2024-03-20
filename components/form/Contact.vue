<script setup lang="ts">
import { reset } from "@formkit/core"

const FORMSPARK_ACTION_URL = "https://submit-form.com/SAH37RHwA"
const submitted = ref(false)

const handleSubmit = async (fields: any) => {
  console.log("fields", fields)
  //   if (!fields?._honeypot) {
  //     const response = await $fetch(FORMSPARK_ACTION_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: fields?.name,
  //         email: fields?.email,
  //         message: fields?.message,
  //         privacy: fields?.privacy,
  //       }),
  //     })

  //     if (response) {
  //       submitted.value = true

  //       setTimeout(() => {
  //         submitted.value = false
  //       }, 1000)
  //     }
  //   }

  //   reset("contact")
}
</script>

<template>
  <div class="form-contact rounded-lg bg-white shadow-contact p-8 form-primary">
    <FormKit
      id="contact"
      type="form"
      submit-label="Invia richiesta"
      @submit="handleSubmit"
    >
      <FormKit name="_honeypot" type="hidden" />

      <FormKit
        type="text"
        name="name"
        label="Nome*"
        placeholder="Nome*"
        validation="required"
        :validation-messages="{
          required: 'Inserisci il nome.',
        }"
      />

      <FormKit
        type="text"
        name="name"
        label="Cognome*"
        placeholder="Cognome*"
        validation="required"
        :validation-messages="{
          required: 'Inserisci il cognome.',
        }"
      />

      <FormKit
        type="tel"
        name="tel"
        label="Telefono*"
        placeholder="Telefono*"
        validation="required"
        :validation-messages="{
          required: 'Inserisci un telefono.',
        }"
      />

      <FormKit
        type="email"
        name="email"
        label="Indirizzo Email*"
        placeholder="Email*"
        validation="required|email"
        :validation-messages="{
          required: 'Inserisci un indirizzo E-mail.',
        }"
      />

      <FormKit
        type="textarea"
        name="message"
        label="Messaggio*"
        placeholder="Messaggio*"
        validation="required"
        :validation-messages="{
          required: 'Inserisci un messaggio.',
        }"
      />

      <FormKit
        type="checkbox"
        name="privacy"
        validation="accepted"
        :validation-messages="{
          accepted:
            'Per procedere si prega di accettare i termini e le condizioni della Privacy Policy',
        }"
      >
        <template #label="context"
          ><span class="text-form-label pl-[10px]"
            >Accetto i termini e le condizioni della Privacy Policy.</span
          ></template
        >
      </FormKit>
    </FormKit>
    <p
      class="mt-10 p-2 border border-white text-white text-center font-jost text-sm font-medium"
      v-if="submitted"
    >
      Grazie per avermi contattato!
    </p>
  </div>
</template>
