<script>
  export default {
    name: 'app-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
  }
</script>

<template>
    <transition name="fade" appear>
        <div class="dialog" v-if='show' @click.stop='hideDialog'>
            <transition name="pop" appear>
                <div @click.stop class="dialog__inner">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    padding: 20px;
}
.dialog__inner {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    border-radius: 12px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125);
    min-height: 200px;
    min-width: 400px;
}
@media (max-width: 576px) {
   .dialog__inner {
    min-width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
