/**
 * Created by ylf on 2018/3/26.
 */
import Tile from './tile.vue'
import TileArea from './tile-area.vue'
import TileContainer from './tile-container.vue'
import TileContent from './tile-content.vue'
import TileGroup from './tile-group.vue'
import TileTitle from './tile-title.vue'
import TileLabel from './tile-label.vue'
import Message from './message.vue'

function install(Vue) {
    if(install.installed)return;
    install.installed = true;
    Vue.component(TileArea.name , TileArea)
    Vue.component(Tile.name , Tile)
    Vue.component(TileLabel.name , TileLabel)
    Vue.component(TileContainer.name , TileContainer)
    Vue.component(TileContent.name , TileContent)
    Vue.component(TileGroup.name , TileGroup)
    Vue.component(TileTitle.name , TileTitle)
    Vue.component(Message.name , Message)
}

export default {
    Tile,
    TileTitle,
    TileGroup,
    TileContent,
    TileContainer,
    TileArea,
    install,
    Message,
    TileLabel
}