const React = require('react')
const center = {
  lat: 40,
  lng: 2
}

class Map extends React.Component {
  componentDidMount () {
    this.map = new google.maps.Map(this.refs.map, {
      center: center,
      zoom: 1
    })
  }

  componentDidUpdate () {
    const allFarms = this.props.allFarms
    if(allFarms) {
      const arrOfFarms = allFarms.map((farm) => {
        if(farm.name)
        return new google.maps.Marker({
          position: {lat: Number(farm.latitude), lng: Number(farm.longitude)},
          map: this.map,
          title: farm.name
        })
      })
      return arrOfFarms
    }
  }

  render () {
    const mapStyle = {
      height: '40vh',
      width: '30vw'
    }

    return (
      <div>
        <div ref='map' style={mapStyle}> Loading map...
        </div>
      </div>
    )
  }

}
module.exports = (Map)
