import { observer } from "mobx-react-lite"
import { useRootStore } from "../../stores/RootStore"
import { autorun, runInAction, reaction } from "mobx"
import { useEffect } from "react"

function Counter() {
  const { counterStore } = useRootStore()
  useEffect(() => {
    // 数据监测 
    // const person = counterStore.person
    // autorun(() => {
    //   console.log(person.name)
    // })
    reaction(
      () => counterStore.count,
      (current, previous) => {
        console.log(current)
        console.log(previous)
      }
    )
  }, [])
  return (
    <div>
      <p className="paragraph">{counterStore.count}</p>
      <button onClick={counterStore.increment} className="button">
        加 1
      </button>
      <button onClick={() => counterStore.reset()} className="button">
        重置
      </button>
      <p className="paragraph">{counterStore.person.name}</p>
      <button
        onClick={() => runInAction(() => (counterStore.person.name = "李四"))}
        className="button"
      >
        将姓名改为李四
      </button>
      <button
        onClick={() =>
          runInAction(() => (counterStore.person = { name: "王五" }))
        }
        className="button"
      >
        将姓名改为王五
      </button>
    </div>
  )
}

// 将Counter组件传入observer函数中，监控变化
// 可以使用 `observer` 方法监控当前组件使用到的由 MobX 跟踪的 `observable state`，
// 当状态发生变化时通知 React 更新视图

export default observer(Counter)
