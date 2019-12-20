import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
  
export default class NotesList extends Component {
    render() {
        return(
            
            <div class="grid-gallery">
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://st2.depositphotos.com/1743476/8509/i/950/depositphotos_85096248-stock-photo-people-hands-writing-in-diaries.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                    <img class="grid-gallery__image" alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUQEBEVEhUSFQ8QDxUVFRAPDw8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGCsdHR0tLS0tKy0tLS0rKy0tLS0tLS0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLSstLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA8EAABAwIEAwYEAwYGAwAAAAABAAIDBBEFITFBElFhBhMiMnGRFIGhsUJS0QcVYsHh8BYjQ3KS8TOCov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAgICAwADAAAAAAAAAAABAhEDIRIxE0EEIlEFMnH/2gAMAwEAAhEDEQA/ANbFXNO6tMeDovGKHtLO21zxD2K2mFdp2OAu4A8jksXFo1UkbVccUKgxVp3U760W1UlBKmr5GZNcQDtkR9U+aoe/NzifVCIqkc1bFW1HIVFldCriqanicIsZMu2UYlCd3gRYUdVhtDIRfh+wKdhLQZM9gSPVHgrjG1ZEpUZpzCDYixV6kxF7Bw2DgNL6hLFnAvAGoGaqAKHLi9FJclsuVOIveLeUb21PzVGykslkpc7KUaGWXCF18gCpT1dtFPIfEuCqc3RxHoSFQqsQ3Jv6m5Q+oqXHRMpKF8jw05XIF+SOd6HwrYypxEnRD3tkfzXotP2fp2i3dhx3LrklU8SwhkfjYLDQjWyuUJJWQpxbMZT4OTm5FabD2t2Vx7gFTmqSsnJFmswCtZwiIkAjy7XHRFqktDSXWAsb30XmzJXHREaeGR3mJt6kql8pJVRm8TI5je9tM7eiHzwuWogw8WXJ6Iclzycns0VGMfSOK42iG60FRTqqKdZfZmmilBTDkjVDS9EqWkCKxNDRlrstIYW+yJZEhGzRkLk6fqgOPYoImlrTdzve6vY1iLYWEk3cfe/ILPYDhjqmQzzeQHIbPI/CP4Rut3UFSMf7OwbHg1XKO9DLh+YJcGkjnZJehlJZWaUfNbWFTRvIT8lwgL0TmCFLiMjdHEfZFqfHJdCbrOAKaN6KA1TMaeETw7EHybFY6OfJa/slK1zeoOamUEXGQWhoqh5tGCeewHqSu19NVwN43tu3ctIcB6rZYSxoiaRvcn1UXaCVogeD+IcIHMo8aofkdmEbj1vNkrMePNO6B4hTBxsFSbhnUrnkmjqUUbWnxsAgh1iNCif+J3kW4x8g0FeZyUr26EqMySj8RUc2hvEmekfvUc04Ys3mvMxVzfmV2jkkJzcVDkPgehNxEHdP+JJ3QPDoDuUcggAWLymnjLFLSOfqUTbgItn981LggF/T7o5ZdeHGpxtnNlm4ukZaXCGt2UQZwEEZWzC0GJWAugc4uubNNYpUaQuaCkGLxEeI8J3yJHysq2J17ZG8EeYOptb5BCRASUUo6cWVx+VPIqMpYYxdgx9GVSloua1boRZDaqFRODRUZAyjpQjdLAqdOxFIiAEYoimydjFFO1U5sWaMmi/VVH4i46n7Lrq0ZqLFVNCol4CtPqGnVVpGRn+ypUKKpk1NLc2bmrdfUtgYXvOdsuip0dQ2Ly2z3NyfdUMWiZObyPcegNmrRulrsjg2zPGR9VNdxIYDn0HIdStzQgBoa0WAAAA0AQGFsEYAa0D6m/NPOIcslg4N+zRRo0BK4sya+T8xSU8H+lUeMlcuuxygp7mr0TjGh6c2RROSBQBY71GMBrnMd4Tqs+rtE+xCQLs9KpO0dREzwkEa2Ivn0Qyu7STSG8h4uWwHoENpXE2zKp1bDxG3MpbPXw/GhKPKghHXcRzRijjBWK4nAjNbPAISQCVEqRGXHxLxw++dlRqsO6LWxQZKrVU655IxUjHfu/orFPRZoy+nXYoc1ky0yagisijGlRUsKJRwLjmtmyY2gqDG6503WhixJhHnH80CfElTkAp48+TEqRM8UZ7YYndx+iqzx2CsRyCyqYhUgNNypySUvs+zONrRTEguilM8LzSv7VsZIRe9jnbOy0GE9oWPAIcCunDCUFbRlkkm6Nm5yo1CrxYgDunSTiy1lKyEqKpmsVzE620YA1cfoMz/ACQfFayzgBqch1KZiDnDgDtbE25XP9FEU+zSKtjxVEJpq1TaLprlfJm/FF34hRvqVWDdlG9uaVsVIsCa+6XGoAF0FFsKHvKYXpjyonvRYqJrpKmZVxFio8rq4nRSPjP4XED02U0M6M9u6PgqOIDzfcLNgL0Tzggc0wtUUUinBQBxoViIqJoTroA0+GPuAp6mFCsGnzsj8guEHu/xs7hTAzILvAW7wCnyCxXFaQeq22E1IDQufK9oj5U03Rp2MFlWqo1WOJN5qRlSHIfR567KckabHHmrE5sooJBdYSRqmFKVivAgIX8SAopcTA3XJO0bx2EKqayz2I4qWG+ytumdJ5QoJsCMnmKWCEpva0VkcYrsFf42IPC1pd9AoqzGJphbygos3suwfhS/cljkux/FhDaRyRy8ntnn9Vh5BOV1QiqnxHIkL1T9zAjRC8S7MscPKtoZP0znFejO4Z2oe3J5uOa0I7TNIyKzsnZdwdlotP2c7MsZaaQaZsadz+YpThCXQocuglg1GSe/mFif/G06tH5iOaixebil9BZFJ5A7I6D3ugtcz/MJ52I6KGqWjphGjgbyUbHgktOTvuOie08/+lWqm7jIjMFTRrRYc3K41H2XbcQB5qhHijdH+F3sD6JU2Jxh3AXjM3bmM+iqiS/3S46NcM4To5LqWgIHNVabkFdkOeSrmPcpUFFXukl19SwG10k6JBH7SqXw8fJw9l5+1esdvKfigd6EryZi70eYh/CpIymhOCBk8ZTgooipQgCemlLSCtfhDXSjoscwZheh9mmANFlM3SOn4+WUHoczAwXA2Vuopi0ZLQU8Y1QzG7AFYU5F5MluzA4nicjJQOI2Gq1uC112g3WEqIXTykN0BsStjgWFljQFu4aOeM6YZqqq4yVOCUi5RL4G4XH0dgsZYzZZALiOJFrSs7Q4s+WXhJyv9Fe7StyIGuyj7LYUGnidm7dVjxKtoynmd6PQsFZ4QtFBCEEw0hoCLw1K2jFLohzcuyy6EKnNEFYdKqM06jI1Q4okZGE2SEFRCZPEq57RoVJaVoNyEJxavI8LdTkFerqvXNZiuqgHse7Rrml3pfVTJ+kd2HHSth2AcLQCb2zJ5ncqvOb5/wB2VlzmOAIOWuuqoVUwvqhMtK9kTnf0VOqmysqeIYvGy4B4nDPhbm7+irU1e2RnGRmdBqAOvNMTaQGxfETxcLGF9vMRbhvyugr5ZHSMLxwt4h7nILUuiB2QrF4xwl1r8NnetjdNMzkmGYZMgLq62sIFroPBICA7mApJJMki0GqXEgcrXKkPHIc/C36lZeOcscHjbXqFp4JS8AtORSaESikjGVkk4QHmuIEXO0cPFCfQ/ZeKubYkciQvdK9nFGfReK4lHwzPb/Ef1XceV7IGhScK4xqltkgCOE5qyQoadmasOQM6xabA8SLSG33ss2wI52ag4pRfbNJqwWj03DXEtQvtDTSOaQ3VG8Nj8NlZdSX1QkkNuzz/ALOYHI3N4FySStvSUVgr0dGBspuGyoRU7iyqVcZsUXDVx1PdJgefYhhkjnXtorWFUDx5slsvgRyXDRgbJE0B5ZywWXaTEyrtTShUHUwGiLHGLsKCtyVKSs6qnPJYaoT8VnquLJJ2dkYaNNDNdSyvPCbIdh8l0VbDcJRTYrUXZn6mTVBjSSVMncRanN7tWxM3cevILTVuDSONo999LdSilJSQ0UJ3JzcT5pH8yqUN7OrL8lKP17Zj8Qwk0rRGyR7bDIX4uLrms1jGJFvh4i5x67c0U7T40S4uN3OdcRt1P/SyopH37yTMnMnl/RJIzjyktklK4jMC18zuSnUc/DIWbHxAcrnNTd1YZIfVC0rHdHA/RVdl1QfD1RxADgd6FSMlyVHEphwnPYpeym9DMKnJjaLaZK29p1QvApQWi2u/qtJBT8QzTfYo7QLOetwuMrZYfEx1x+JuxH6ohWUoboh8jctECaNLBiQc0ODhmLpLEEyt8LdBoknQrZ7HILsPovHO08PDUu62K9ihzZ8l5d22htODzuus8wBRMSlOyL4HhZlvyCix3B5ITfhPCd7HJAwfCnNzUbSp42oAlYFo+ybf82/ILPMC3fZOg4WgnU5lJgjb0AyRKMIXSGyIxPQhsleVVkeVYJVV6YiWFxVpqqRPCnMoSAlUMrl1soKZKUMCjO9D6mWyvTIVXOWTNYgquqUMhBc66nrGuKlwyPPNcr7Oq/qaHCIcgtBDGqOHR+EJz8Q4Hk/hAseZPRdEKijmacnoIzTMiaXONgPqsDjeKSTyBrBxF2UbdvU8gr2LV76h4awHM2Y0ak9VZpMJjpyHE8UvCQ92oFyDwt5AWUSbl/hpix099gujwBjLvkPeSOyJtkB+Vo2CGYxhwFywZWWjqJb5qlOQQbqGd8Y0jFMNrt5INikjuMNZa4uTdaQUDnSODQbDMnZoJyuhctHZ5Nr5ouiGr0UIKOpfubdBl7rQ0HZeOwdKeM8ibi6ijlm2db009lYgrpBk4X5OH8wnzJ4kGMYO2Md7D4S3NwGhbuoKevyGaKOqgRn87rJ1T+7e5u2rfQ7I7C6Dk9YDqqUkoQ9sjlKxm5TE2Slw5pKPhCSok9Qwyouweiwv7QYvE13IrT4I2YMAdG4fJDO1eE1EzbMiJPyC6TzmUuw9S0DhPNbl+LsjAEkQezmMyPkdUK7Idk4DE0vjLJRk/wARuT7rTydmoyLZ+5Tp+gso02G4XWC7Gxk7izQ4HruFFU/s6pD5Wlvo5wTXdg4w/vGOexw0c17mn6HNaKkfJC1rJHGT+I2uVRNGOf8As3AILJHZG9jYj7I3QYHLHkbH6LUQztdoc+Sm4UmkNaAUdI8bK2yJw2RQALtkUOwWGnkq87TyRwAcl0xDkihGbY53Irk0rraFaPuG8l34dvJLiOzOU0jzsVeEbiNEWbA3knhgRxCwBJRPOyqSYI92pWr4QlZLgh8mZF3Zu+pXYezdtytZZR1M7I2l7yA1ouSl4ofg+cgFUt7ltr5n6DmgT+8mdwRgn9OZOw6q/FHLWPL2gtivm92VwPwsbv65LTUVFHE3hYLczq5x5kqPHb/EbLIoLW2CcHwMRC5zecidmjkECrJCST1JK3azGO4W4EyNF2nM2/Cd79EZYaVei/jZVzbl7M5I8qtI86DNWZWHktB2bwQtPfyts7/TadW/xkc+SxjBydHZmyqCtkFHgZZTPa4eOTxv6EaN+X3JWRraDO9l6zZYnHaHge5tvCfEzqOS1y41WjhxZnbv2ZEUwVuhoxq/TbmVYcBYotR0wLQctAudQOvmDajD2ubdrVjsfwfizb4XA3HI22K9HmNhbos9iMQN0uma0pR2efxOdfh4XAjI5FXjDIBcscBzLSAiUTXd9ZtjbnoOq0oF4yHWJ25hWZ8TCcXVJGpqSLiN2hcRYcWeytjbyCeI28gmgJ4C7TyRvcN1GRTg8jVLhS4SgDhqQFHLUscLHNddD/eyhkpQeh+iYyu54ByNx9Vbpq07G/Q6obU0Eg0N1TEjm5PBHXQe+yB8fw1sVU09D1U6xdRiM0Q4uAzs3tYSs/k5X8NxyJ/kkLT+R92O9jr8kuSuiTTJAqlFXfmHzH6K3HK12hB+6YDwV3iXLJFADrrqjI30SB6oAkXLpvEuCQIAeqtfQMmDRJcta7i4dA42yB6KwSlmgBNAAsBYDIAZADkuphCVkAOXCmFwTDIgBfDR34uBt+fC2/unkqB0w5qN0w5oGWS4KrXUscreF3yO7T0Ub52jdQGuYNSB9UmCv0ZnFOz0zLlg7xvNvm+bdfa6E0uIui8D9suRHQhbk4rGN0I7SVEEsRBcA9tywnPPksZY12mdEMr6aBbq1rxkUNxKUNaSVnXYi5psHEH1UEtaX+ZxPqbrBo7Y5NUXsPtcu3OqLicWtfUfVZhlQBpkoqrF42DxOueQPET8k6sSlXYZksSSuLJP7RuJuAANgdUk/Gw80T6MCeCogVICus8okCcFGCngoAcAkYwUgU4FAyPuraZ/dMfTtdqAVZSLb/3mnYgRJhbfwG19tW+yG1WGyD/TY8cswtM641HEP/r23SZwu0P8iPklSYqMY2rdHlwSx/7S2Rv/AAdn7BXqfFmGw4ru5W7px9Gvt9CVo5aVrsiAfUIfUYHE7Yj08vtomlXQHIsQ2DyDs112u+Qdr8lZFU/n9kJfgb2izHgj8rh4fbT6KDgmj1a5v+3xx/8AE3t8rIsYeFZJ0PqLJ37xcNWexQeCvJ1AdzLciPVpz+6txVTHZB2fI5H2Kq0IINxNu4I+SmjqmH8QPshpsozGE6QBvJcAG2SC+IaOKYZJPzFLiFhwtPNNIPRBhWyjqpG4m7cI4MLCTgeiikuq7MUbupfjWHdLix2Mc0qCVj+dvQKz37ea4ZGpUOwZJSE6l1+dwqU+GOP4j87I9xhNuEuI1My02ES7EH3CHVOCynMtv81ujZMLQk8aKWRnmVZ2dLvNGfa590Jn7Lv2Lx8r/devuhadlC+kbyU+IpZjxqTs9INXO9v0TGYK4aNv/wCt16/JQBVJMMb+UeyXjZSzL8PLf3Yfy/SyS9MOGDkfcpI8bH5UagFPBUQTwVZzkoKcCowU8FMCQLoKYCuoAkBXQUwLoQA+6ZJED0OxGRTrroKAIw9zfNmOe6mY4HRcTHRbjIoAlLUx0SaJCNR81I14KYilUYdG7zNHrofdDKrBn/6cl+TZBxD5O1H1WhXC0JiMg6SePzscOoPex/qFPDiQPmHzH6LSuiVKowyN2rRfmMkAUmTNOjlJmoZcFt5SQoDTTN0N/VMC5ZNLAqfxcjfMwn0zT2YizfL1yTsCZ0AUTqdTNnadCn8QTtgUjC7moyHhECmkJ8gKHfPCb8Y4IgWhMMIKLEVBiJT24iE99I1QPoQjQFltcE8VQQ19GdlC6F4RSANd+Eu8CBGR4XPi3BLiMO8QSQL48pI4js1DSngpJLIY8FPBXEkAPBTgkkgBwK6EkkAOXQkkgDq6kkgDqifFyySSQAzvSNVKyUFJJNASJJJJiOEJjogUkkAQSUgKpzUDTqAkkmBRlwpu2Xoqz6OVvlff1XEkxEXxcrfML/NSx4oDqEkkgLDappTu8CSSoBcaXeJJIAXGFwgJJIAifECq8lKEkkAVjRhJJJMD/9k="/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/gallery/5bd866ce5bafe8c43a3c986c/galeria-escritores_0.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2017/02/04/417224.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="http://notinerd.com/wp-content/uploads/2015/02/2141.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://lmdiario.com.ar/download/multimedia.normal.a93e7bf75f59b5a8.43617274617330303030335f6e6f726d616c2e4a5047.JPG"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3wjEhXTNOqnkajYjn74A8mcNCSoOgIYfTva5iEkFbwYIRq0Jng&s"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://lmdiario.com.ar/download/multimedia.grande.998ebbb0833ad51a.43617274617330303030325f6772616e64652e4a5047.JPG"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://cde.peru.com//ima/0/1/8/8/3/1883355/924x530/whatsapp.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://ep01.epimg.net/cultura/imagenes/2018/11/07/actualidad/1541621568_026888_1541622314_noticia_normal.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://m.vanguardia.com/sites/default/files/imagecache/Noticia_600x400/foto_interna/2018/03/13/web_untitled_desi_wide_31.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWJWREw3ynmFHlAaERl1XfmJQzN3npZ0YVid2P8HroZYrdPHT&s"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYRZ5rdho-jK0v9tIfa21tv98Clj5q30lpI34O0w_FHiSnGshjg&s"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://static.iris.net.co/dinero/upload/images/2017/2/10/241887_1.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGKVRYyccfDh9P7CX1dwLTh-fo9te7GIk8kEx4LE420NgTP3P&s"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://icdn6.digitaltrends.com/image/digitaltrends_es/problemas-del-ios-11-head-640x427.jpg"/>
                </p>
                <p class="grid-gallery__item m-2 mt-3" >
                  <img class="grid-gallery__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvx4UziQ3GBHiI-peAE43j9bwNTNASUIX1T7aquS89h_r3cssIA&s"/>
                </p>
                
            </div>
        );
    }
}