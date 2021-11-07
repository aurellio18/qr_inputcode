<template>
    <h1> QrScanner </h1>
    <div class="flex h-screen">
        <div class="qr m-auto">
        <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
            <div v-if="validationSuccess" class="validation-success">
                This is a URL
            </div>

            <div v-if="validationFailure" class="validation-failure">
                This is NOT a URL!
            </div>

            <div v-if="validationPending" class="validation-pending">
                Long validation in progress...
            </div>
        </qrcode-stream>
        </div>
    
    </div>
</template>

<script>
import {QrcodeStream} from 'vue3-qrcode-reader'
export default {
  components: { QrcodeStream },
  data () {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null,
    }
  },
  computed: {
    validationPending () {
      return this.isValid === undefined
        && this.camera === 'off'
    },
    validationSuccess () {
      return this.isValid === true
    },
    validationFailure () {
      return this.isValid === false
    }
  },
  methods: {
    paintBoundingBox (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
    onInit (promise) {
      promise
        .catch(console.error)
        .then(this.resetValidationState)
    },
    resetValidationState () {
      this.isValid = undefined
    },
    async onDecode (content) {
      this.result = content
      this.turnCameraOff()
      // pretend it's taking really long
      await this.timeout(3000)
      this.isValid = content.startsWith('http')
      // some more delay, so users have time to read the message
      await this.timeout(2000)
      this.turnCameraOn()
    },
    turnCameraOn () {
      this.camera = 'auto'
    },
    turnCameraOff () {
      this.camera = 'off'
    },
    timeout (ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    }
  }
}
</script>

<style scoped>
.validation-success {
  color: green;
  font-weight: bold;
}
.validation-failure {
  color: red;
  font-weight: bold;
}

.qr{
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>