<template>
  <base-header main-heading="Login">Login</base-header>

  <b-section id="contact" class="section-padding-100 contact_us_area">
    <b-container>
      <b-row>
        <b-col col="12">
          <section-header center="true">
            <template #main-heading> Login to Account </template>
            <template #sub-heading> Login Now! </template>
          </section-header>
        </b-col>
      </b-row>

      <!-- Contact Form -->
      <b-row class="justify-content-center">
        <b-col col="12" md="10" lg="8">
          <base-form>
            <b-col
              col="12"
              md="12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input name="email" value="Email" />
            </b-col>
            <b-col
              col="12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input name="password" value="Password" />
            </b-col>
            <b-col
              md="12"
              class="text-center"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-button mode="more-btn btn" route="">
                <button type="submit">LOGIN</button>
              </base-button>
            </b-col>
          </base-form>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>
<script>
import BaseInput from '@/components/local/UI/Form/BaseInput.vue';
import BaseForm from '@/components/local/UI/Form/Form.vue';

export default {
  components: { BaseInput, BaseForm },
};
</script>
