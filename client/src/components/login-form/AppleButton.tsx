import { defineComponent, h } from 'vue'

interface ButtonProps {
  show: boolean
}

export default defineComponent({
  name: "AppleButton",
  setup(props) {

    enum ButtonType {
      RED = 'red',
      YELLOW = 'yellow',
      GREEN = 'green'
    }

    const buttons: ButtonType[] = Object.values(ButtonType)

    return () => (
      <div class="apple-btn login-apple">
        {/* <div>position: { position }</div> */}
        <div>buttons: {JSON.stringify(buttons)}</div>
      </div>
    );
  }
})

{/* <style lang="less" scoped>
@btn-types: red, orange, green;
.apple-btn {
  box-sizing: border-box;
  padding: 0 2px;
  height: 25px;
  width: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &.right {
    margin-left: auto;
  }
  &.show li {
    transform: translateY(0);
    opacity: 1;
  }

  li {
    list-style: none;
    height: 15px;
    width: 15px;
    border-radius: 15px;
    transform: translateY(-120%);
    opacity: 0;
    &.red-btn {
      background-color: red;
      transition: 0.3s;
    }
    &.yellow-btn {
      background-color: orange;
      transition: 0.6s;
    }
    &.green-btn {
      background-color: #0d9a0d;
      transition: 0.9s;
    }
  }
}
</style> */}
