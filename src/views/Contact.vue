<template>
  <div class="section">
    <v-container grid-list-xl text-xs-left>
      <v-layout row wrap class="mt-4 pt-2">
        <v-flex xs12 sm12 md6 lg6 xl6>
          <h1 class="text-uppercase display-2">
            <v-card flat color="transparent">
              <span>Contact </span>
              <span class="purple--text font-weight-bold">Me</span></v-card
            >
          </h1>

          <form method="POST" action="https://formspree.io/f/xyybvwlb">
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    v-model="name"
                    name="name"
                    color="#a3a7ce"
                    background-color="transparent"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    v-model="name"
                    label="Last Name"
                    color="#a3a7ce"
                    background-color="transparent"
                    :error-messages="nameErrors"
                    required
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    color="#a3a7ce"
                    background-color="transparent"
                    :error-messages="emailErrors"
                    required
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-textarea
                    color="#a3a7ce"
                    background-color="transparent"
                    :counter="200"
                    :error-messages="bodyErrors"
                    v-model="body"
                    label="Textarea"
                    name="body"
                    @blur="$v.body.$touch()"
                  ></v-textarea>
                  <v-btn
                    @click="submit"
                    type="submit"
                    color="#a3a7ce"
                    class="white--text"
                    :disabled="body.length <= 20"
                    >SEND MESSAGE</v-btn
                  >
                  <v-btn @click="clear">clear</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </form>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 justify-center>
          <v-img
            class="ml-auto"
            src="/images/girl-2.png"
            max-width="250"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    title: "Contact",
    titleTemplate: "Sarah Tran",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Sarah Tran's Contact Doboj Bosnia and Herzegovina Freelance Get in Touch ContactMe",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
     
      {
        property: "og:description",
        content:
          "Sarah Tran's Contact Doboj Bosnia and Herzegovina Freelance Get in Touch ContactMe",
      },
    ],
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) },
  },
  data() {
    return {
      name: "",
      email: "",
      body: "",
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("Text is required");
      return errors;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
