import {onBeforeUnmount, onMounted, reactive} from "vue";
export default function (){
    //实现鼠标打点的数据
    let point = reactive({
        x:0,
        y:0
    })

    function savePoint(event){
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX,event.pageY)
    }

    onMounted(()=> {
        window.addEventListener('click',savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint)
    })

    return point
}