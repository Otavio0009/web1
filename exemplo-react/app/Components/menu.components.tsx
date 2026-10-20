import { MenuItem } from "./menuItem.components";

export default function Menu(props: any) {

  type MenuItem = {
    items: any[]
  }

  return (
    <div>
        <ul>
            {props.items.map((item: any) => {
              return (
                <MenuItem key={item.link} text={item.text} link={item.link} icon={item.icon} />
              )
            })}
          </ul>
    </div>
  )
}
