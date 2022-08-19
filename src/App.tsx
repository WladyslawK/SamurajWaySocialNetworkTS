import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAABVlBMVEX///8AAADMAEwAidDzcCFkYKr8txENsUv8tAAArkB5eXn+3qm+vr5wcHCo27bd3d0zMzOlpaXl5eUAhM5OTk4Af838sQDLAEXyYgBXV1dTTqMAqjNERERgXKhaVqbKAD/IADjyaAC0tLTKAEHyYADS0tJ/fLfzbBSBgYHIyMiysdLLyeC+2e9urt7//vwAqjLx8fGampofHx/oqrnikKSnpcz99ffs7PT02N/U0+X5vqb+8Or6zryYw+bb6vZva6/839P2mG1Bmtb4tJbb8OH9znaNjY1jY2PwydLdd5Htu8f45uvn5/HZZYP3onzlnq/0f0D1h0+UksL8282+vdmFgrrh8+b904f+7dByyYuDzpjJ6dL92Zj+5r1YpNr9xlm14cFFvGrPJFrVTnPTQWqv0Ov1jVswlNR6tOD4tZnYXX70eDJLvm78v0B0yYz+7MzGACaU1KYiYYDsAAARs0lEQVR4nO2d6VsVxxKHzxHiirLJItthU0DNERGXgAtuoMZ9CZqAQWNiNnOv//+XO90909NLdXdVT58DuQ/1PPkiM9PzUt31q6ruIbXavu3bvv2f2pUHl54tP3y4/OzR99hbHr++/PLMmTNvXp79rpVvlsa+X/442WjMDGU205hsPHkUvuXcm5GJiXFhExMjZ861/i0r2LVfJocOqDbUaCxf8d5yOcP7RrUM82ybXpduV/40AAXl5LL7lrMjOp+wifE96slLECCzmQPX4Dse35oAAJmNvGzvu+PsySQMyGzyGXTHuREHIJuu31xtN0DQPs64CTPGh/YdZz2EbEk+bj+E1z46Jqmb0U/IVuTeYgwR2nPVN0sLRy7uDgxoT7yzNGfUYs7VMOE347d2i8e2S55Io5h6yxlILKypenm3iEy7giNsKPr42qUWuo3sleX4JLgQ86la5jkYH7KpemYXsRT7HufELAWQbkQ6MXPj3kjLHyKdmOVyxS23kIR7xY1YJ2ar8YG44zEinBZu3AtJzqMGGnEo1/+z2HmaBdW9UHXg5+mBQjdQirGHZioBsIipeCdmM3WX8WpoURQmFiMmsyln6u7H1GskxEvslu8oXpzY/er4AT7aZPGGKyNaFTni7scbQkAtQiohoGbxZvfz1H1ECPHyyAQ3lHTsAUTaWuSIj89xe315HAG5B9YiOgnniEa/8QwCcfcjKiFFzWqNS9qtrxETdS90cD4REriG2v9/PY4JO+3MblbXrq+srFx/tWr8+zIBUenfuNvEmtk56uLNm+dv3kzPd/1p5/CUsOG529fVH1HiTVn3f4dM4vRoc/PG+/6BgQH2X8f7Gwk5V+9OTc11ljY3NXVX2YuhhNTiHnSaqtaLv34e6O+Q1t8/8PlGGsDm01mVL6ccvisvIFT9vxT3vKE3b853KHwF5kAKyJVhG5DZVOdafgVeNoqSGO/EUjLeD1iAwpfnKwI2fxsGAZnNruQXoWPqTNERRyfi4/kNN/ttF+Y28G0lwtVO2IXChp+Kq9A5nNSMl8h5WgSb87ALc0d+rkI45QFUGLETVWoGtrMxshgmrMR4xedCwSjm6jPElgZHLOIwssk4LjZSb/oJqzA+DyJ2zr7ivwtkwKH2UfNGsXMZlozv4wjvBqYpt6kmuxSnG0OfikcjJ6rYmboTRuyIE4/VWQRh59xtdi2ugSM1AxluJl6za38NTVPBGNNSfhGepnyqrrGLUbohNQNZ90/wa1GEUVN1zS2Iuhufs6tRulHWGecwiKLe/x0xTbkb6RnrbzgnZlGVRxyMF8s64zGqjGJz7yrOiTFuxK1E7sbf2PXLmK3wMnfHbIO/oTgxYjWuYMKpsFlWQWJ0Y6h8PMKJog2OdWLmRmpQRQYb7kae44S3ikvNwFUa7LobaCd2dBD1v4kMNtyGmTaGdWNIOXpzOYgo0lM8YDZTaWdYsPGU2xRP4z6GEGeUkzfhUoP3bALJqTFTaWUVYSkyY7dcCumG2psK7tyI9PQOxYvExXgXvxSZG3kzJ4Soni26GkLkx1GC+beO+DsJ8SkJce4FuyfUiptUz94GVEMcnPqWEGzIynibhNg5vFYLNzga6gCBWkM0NEhO7Oi400pEoRt/et2oakZQNXh6SlEMOiJtomZuZJPwgdeNQ9pxTb9qiPSUBkidqLRwkwWcP9hdH32IM9qWjV81eHpKUgyGSOtTEUUjm6rsLq9uaPsZftUQ6SlJMTrIovGKiih0wzdTCedReXpKU4wOsvSTEjhuvGz0NTgm9e81fIgRitFBLzUIabiwoG409AE8qiEaGlQnUtPwiMXImzi/uN34SR/A076JUgx6MXWFPFN52ehucAw90Qdwt2+iFCOmQUVVxs45vlfldOKMsc3vbt/w9JSqGDH9KXxno7ApdpuzMd4wvoFztm/EfhtVMWLaU3Q38rLR2eBoGN9NLbpCKk9P6YoRsz/VpAaczr/YbS7dmDS/8XN6kf2QrBj9EYSZ/M8SEXm70dXgaJiPdzT9RUOD6sSByI3Uu8SoKspGR2P8k/l0h2rw/TaqYsTvh98mztVht26YmuFSDdHQIPowaiHGMYqyEfSieTTMlYjHKEbs1puwp7S5ytuNYGPc1AyXavD0lKYYFTf7ayuzFEReNoK6YWpGDU7EeXpKU4zq51LWvCcarKnKboEa45ZmwE1/np5SFKO/I8UZKspk5WUjpBuWZoDtG5GeEpxYdZIW9moO70heNn60ET/ajwXaN7yhgVeM6ueKpDVvox3Jy0ZbN2zNgNo3oqGBd2GlSGra9SmkI0XZaMVUWzMg1eANDbRiDPyaktB/UkwzXjZajfHGJfuRQPuG/TNSMfrvVPwmbnX72Nbm1tb226b8J9d5P9ONrGy0GhzFZ32amV7k6SlSMVSpaN77KbMfKHzb9w8PHs5t8ODm2wL7OSrX4WWj2RifhP4ujNm+4fttKMXo/1xIRXPn3aHRI8xGRz/8+BOKr7mVgR1ULKPcyn35xywGkZWNZmMc0AwrERfpKcaJA8Ue1L13Gd4haRno1yY0kmbHdL6CclPcufoXwpG8bDR0A9AMSzV4eopQDKn29/4eVfhyytEf/YCrXwBADnn4mLjibtiRvGzUG+OQZpjtG9HQQLiwUPt/bEDhSt90fQu5sID8Ihy51hlypDiloiOCf/JGVw3e0AgqhlT7n46AgMw8jtwedAJyR26Ly56GHMnLRq3BAWmG2b7hDY2QYki1/3HUBcgc+XcUYWaDPwtHhhI6XjZqugFqhq4a4wjF6C/U/odDThcKxg/geG9DhMyRQkBCCR0vG9XGOKgZevuGp6d+xRi4kx87+XrBC+jyY9O9DFVHboqr/QmdpRuT8LxRVAOhGIXaNz/4XSgY/7GH+xmFePDwwdyR/oSOXRLSDK19w9NTn2JItd/xrcLSRnfM0YILUTIObok7fAkdLxvLxjisGZpq8IYGxoXvcISZH80kAOdDAZnLx+oLp3yIdqOcqbBmqO0b3tBwK4ZUe49UWIjv9MGOERAzR+bysQJ8apQHnLWaohuwZtSU9g1vaDgVQyZsXqmwpuq9WCcyK+TDmZnzslHqhkMzyj97wxsaLsWQah+SCq8bt4mImXz8R9zpSuj4KZWiMe7QjFI1eHrqUAyp9l8pLmR2Qa2vkOFUc2QuH2twZj7FysaiwTHpICwScZGegk4sXYiRCsONX+PnqXBkLh+OhI6XjUNezZDtG56egooh1X4Hzrn9puQ4iMQGdGQuH2BCp+jG0J8uxDwR5+kpOEmL9szf1EnKbbTUDfJSLBz5Jf+wGEroWNkoGuMuzShUgzc0AMXo/5y3ZwhSoZlSVm1FIpbyASR0XDd4Y9ypGblq8P02WzFke+afKBcyxBNyoM1YxFI+7ISOl428Me7UDNH05+mppRhlbU+TCg2xLBzvxyOW8nHdTOh4u/GTTzNE0x9UDKn2ZKlQEUtljNAM1ZH3xVPMhG6u0I1JJyFXDZ6e6k7s789dGCEVMGIVLx5U5MPIzHnZOOTRDK4agGLI9kyUVCiWDLGUDz2h42Xj8oxbM7hq8PQUVPtmnFSAXqwQbgpHFvKhJ3Q1phtuzWBNf56enlecKBO2WKlQEMtwQ6ozHIyDeRdSTeh4u/HJpFszMtXgDQ1FMaTaR0uFgliKxtvqiKV8KAkdLxuv/detGbXaLbbfViqG3IypIBUKYin9zbgEzjApH+XeOW83HvD9nfs3rKEhFUOqfRWpKG1UKTVcTXCiFfIh9855u/GZ78+/q2elZHummlQopgyUYDFyk/LxKk/omG74/8B9TSqGVPsTSVyoRZtUM5VZIR95q1V83BAwPWGrLBXS9M5GtfxGNSkfIqGbCxNyxZBqX10qStOGiawYQcZCPq68GC4+bvDaHfXoRQKpKEyRjMRuVOSDJXTPQ4SZYki1TyIVEtEYaDWdGxX5yBI6Xjb67Fu5GZNIKnKz2+HHUjKW8vHH7O0AomzPJJMKYcDmVMqpqsjH6pT5V9V0+71Q+1RSkdsodIIjkf4XVshH7ZUXMblUCLsA7oY3D6ZllPKBsJRSwWz0BDxOM7EfpXwEDb3dhCX86hzqftKYo8iH15JKBbMLO57Rtj1nNmJMnoHwWFKpyOzIoXve8Zqbg4mjzn3veKmlIny2qMZPiCWllPIBWlqpOJIBYpZGlrFufhmUB/2qW7GJBfw6P1w4ks5Gj7zbQfHlg7/dPpbMtlwL8kRC26Ed19y3fdu3fdu3fdu3fdu3f5vh0vV/tU337vYboGyxr7u7uy/uf7bZVd/jjH3T66fqpZ2an+4jPqGrXr9Iub5bNzlcX3fAqC/GbeFoHbLjXZSHZIj1dfzlfeZgxQ82wHfRbOko6c1q3fOehx0/TUKsz0cjHi1+cDyMyGwD/WYLY/4njdEQyzdtNWL2at2YcU73hJ5zkohYTriWI2J+n4unwk8hI9Y32odYXwoE/4uYh9AR66fah1iv+ybrYmARxiPi7kmEWHdLyGnkE2IQUTEqFWLdNUAv9gFRiPWeNiI64ptPClMg1peCSXkyxDookISnRCIGY11CROgVKQ+JRazXA4zpEIGI45mlJ+d7p7u6ei8elSlBPGKAEYs41jUtrXd+CXprKzN2RZqei5rGLMxXRfTEcwKiobKnAa1bMh7tUIujgIZ29VRD9OpyJCKYsejzpQkCHndMqoUlahqOZoxGBKahHlNPAi+y5HmT6UqIcECviGhXlNpLTgOvga0NYhDrCy1ANG/Vug2LwEuk6rjAiHVXfV4BsWaGHDWkAprj/DUnQqw7pnoVxHU3YncLCZ2IjmlSBdEMqspEtUtgfDSJR4QZUyKWFLYT0Z2WSohg87EKopmflXHbWolmWtAqRKj5WAXR7DjJH9jhFNXCSoEINB8TikaZnlhZQSJBxCDaY1VANBvb5Vq3GopxexdxiFZjLh7RyrKbrmcmjTVhRPNdoxEtjnIRWPM06UoMIxpFSyyiPUzZQzGTV0QLKS2i3piLQmx22eWiIu3mj1LvBoYRtd9qqsbGhvuRqeephQj1IBTGRIg9njdwtlhTIU6byTLndka/OEQteTHzOtzOQwXEXqsg4FYoVRJEPYKZeR1hQzcW0cuYAtHIfc2AmvzsAYAIb371JUPs0UtBs2lD2y2PRPQwplmLp9QMzRSUdLWwDxHu2nYnQ9Q4TC+2CRFmPJ2w4V+uOLPibxci2PTLGNPtaVx03ZmwpeFHhBkXzOq1wrZNMZIZwNsSUeGfcDMDUQXEorFhrgn8IaDKiJj01Y04phl8MzwMfj+mOmJtoQKiMUwfpEPiZisNbycighGLWAM3SEU6Af9rmxDDJ0QIiEAAEyWV2bppdb1oPD/ESEEExJZnOaZ7U5caAcQQIwnRytXEaMS9+OSI0I5KNKL1++LR0+oUJ56pQUQ/Iw3RiiziMsu57Ua0o3o8orVTzPs01hpNm8MhEH2MRESr2uYw9p5G2xE9jEREKwEQybh1lCFpEodCBLfiYxAt+V8HX8J3oKJViE5GIqK1G5y7y35wQuFAIroYq0bUvN1mJwUJu/5YRAcjDdFO4YrC2H4y/nRUMsTaItQopyHa9xfyADRSelLNVTxirQkwkhCBslmGFej3lyjmEBCh96AgQsdN5Q/Bus3XGMeXXCREe8saj7gIneNTigr4oyvnKa4NfDyiIVqMWETHJ15qpgZeUF+CkrnTG1XOo4ayfIPRiXhSM/j19V+Es2w73qUFnsqnioOFjF4WVOnAmRs4vu+INtZ72RHs9Q0ZDlqIqDNWQzSejPgGsrRWImpJcyVEq7XvnNDtRlTfpAoicEYK90VYGxCVbLoCIhj18YwtRixXTTyi4+Ml9HpsNaJ8k2hE56dL4Db8biAWjLGInl4pYpuhPYg5UySidxQw1dsNRHH4MgpxI1QmYfbE2oHIGSMQoY+gLAt/MY1HXFjqUQ3Mel02ryDO9yBsbGMdvZMfgkzXFfDaeurTsZp1eb7uP5780IPL1tOe4jZtcRqa/2PrKVuQQWv9YIsLvfMbY6zAWBo7dfRil2cl/w8ZvAbfTPkb7QAAAABJRU5ErkJggg=="
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
            </nav>
            <div className="content">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="img"/>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>

        </div>
    );
}

export default App;
