<template>
  <div class="middle">
    <!-- O81leMbC4 -->
    <form @submit.prevent="onSubmit">
      <input
        type="email"
        v-model="message"
        name="email"
        class="email-field"
        id="email-field"
        placeholder="Interested?"
      />
      <button type="submit" name="subscribe" id="subscribe-button" :disabled="submitting">
        Subscribe
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import $ from 'jquery'
import axios from 'axios'
import { ref } from 'vue'
import { useFormspark } from '@formspark/vue-use-formspark'

// Import the library
import Botpoison from '@botpoison/browser'

const botpoison = new Botpoison({
  publicKey: 'pk_83034857-06ff-4006-9c88-c584e080650c'
})

const message = ref('')
const loading = ref(false)

const [submit, submitting] = useFormspark({
  formId: 'O81leMbC4'
})

const onSubmit = async () => {
  loading.value = true
  try {
    // Process a challenge
    const { solution } = await botpoison.challenge()
    // Send data to server using Axios
    await axios.post('https://submit-form.com/O81leMbC4', {
      message: message.value,
      _botpoison: solution
    })
    alert('Form submitted')
    message.value = ''
  } catch (error) {
    alert('Error submitting form')
  } finally {
    loading.value = false
  }
}

/* trigger when page is ready */
$(document).ready(function () {
  // your functions go here
  $('#email-field').click(function () {
    $(this).addClass('active')
    $(this).attr('placeholder', 'Email Address...')
    $('#subscribe-button').addClass('show')
  })
})
</script>

<style scoped>
/* style input field text */
::-webkit-input-placeholder {
  color: #f4f2ca;
  opacity: 0.8;
}

/* Input field that looks like a button */
.email-field {
  width: 80px;
  display: inline-block;
  color: #f4f2ca;
  text-align: center;
  background-color: rgba(0, 0, 255, 0.748);
  box-shadow: 0 3px 10px #8b8eaf;
  padding: 0.9em 1.8em;
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.email-field:hover {
  background-color: rgba(0, 0, 255, 0.928);
}

/* after button is clicked */
.email-field.active {
  width: 200px;
  outline: none;
  color: #efaa9d;
  text-align: left;
  cursor: inherit;
}

/* Email submit button */
#subscribe-button {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  border: none;
  text-indent: -9999px;
  opacity: 0.8;
  background: url(http://helixpowered.com/assets/img/arrow-circle-on-right.svg) no-repeat;
  background-size: 13px;
  background-position: 0 1px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  transition: all 0.2s linear;

  cursor: pointer; /* for demo only */

  display: none;
}
#subscribe-button:hover {
  opacity: 1;
}

#subscribe-button.show {
  display: inline-block;
  background-size: 33px;
}

.middle {
  padding-top: 5rem;
}
</style>
