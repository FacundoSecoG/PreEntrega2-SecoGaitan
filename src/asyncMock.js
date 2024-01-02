const productos = [
    { id: "1", categoria: "apple", producto: "Iphone 15 pro max", descripcion: "Potente y elegante, el iPhone 15 Pro Max redefine la experiencia móvil con su pantalla ProMotion de 120 Hz y una cámara triple mejorada. Captura momentos increíbles con la calidad de imagen líder en la industria.", precio: 1800, imagen: "/imgTelefonos/Iphone15ProMax.webp" },
    { id: "2", categoria: "samsung", producto: "Samsung galaxy S24 ultra", descripcion: "El Samsung Galaxy S24 Ultra eleva el listón con su impresionante pantalla Dynamic AMOLED, un potente sistema de cámara cuádruple y un rendimiento de última generación. Experimenta la innovación en tus manos.", precio: 1200, imagen: "/imgTelefonos/SamsungGalaxyS24Ultra.webp" },
    { id: "3", categoria: "xiaomi", producto: "Xiaomi redmi note 14 pro 5g", descripcion: "El Xiaomi Redmi Note 14 Pro 5G ofrece un rendimiento excepcional con su procesador de última generación y conectividad 5G. Disfruta de una experiencia visual envolvente con su pantalla Full HD+ y captura momentos inolvidables con su versátil configuración de cámara.", precio: 500, imagen: "/imgTelefonos/XiaomiRedmiNote14Pro5g.webp" },
    { id: "4", categoria: "apple", producto: "Iphone 14", descripcion: "Inmersivo y sorprendente, el iPhone 14 lleva la tecnología móvil a nuevas alturas. Su diseño elegante se combina con una potente configuración de cámara y un rendimiento ultrarrápido, ofreciendo una experiencia única en cada interacción.", precio: 1260, imagen: "/imgTelefonos/Iphone14.webp" },
    { id: "5", categoria: "apple", producto: "Iphone SE (2023)", descripcion: "El nuevo iPhone SE (2023) redefine la asequibilidad sin comprometer el rendimiento. Con su diseño compacto, potente chip y una cámara avanzada, este modelo se destaca como una opción ideal para aquellos que buscan calidad sin sacrificar el bolsillo.", precio: 699, imagen: "/imgTelefonos/IphoneSE2023.webp" },
    { id: "6", categoria: "apple", producto: "Iphone 14 Pro", descripcion: "Sumérgete en la excelencia visual con el iPhone 14 Pro. Su pantalla ProMotion de 120 Hz redefine la fluidez, mientras que su sistema de cámara avanzada captura detalles sorprendentes. Experimenta el poder de la tecnología de vanguardia.", precio: 1399, imagen: "/imgTelefonos/Iphone14Pro.webp" },
    { id: "7", categoria: "apple", producto: "Iphone Air", descripcion: "Diseñado para impresionar, el iPhone Air combina un perfil ultrafino con una carga inalámbrica mejorada. Este dispositivo representa la fusión perfecta entre estilo y funcionalidad, llevando la experiencia del iPhone a nuevas alturas.", precio: 899, imagen: "/imgTelefonos/IphoneAir.webp" },
    { id: "8", categoria: "apple", producto: "Iphone XR 2", descripcion: "El iPhone XR 2 es una emocionante actualización del popular modelo XR. Con su diseño elegante, Face ID y pantalla Liquid Retina, este dispositivo ofrece un rendimiento excepcional a un precio accesible.", precio: 799, imagen: "/imgTelefonos/IphoneXR2.webp" },
    { id: "9", categoria: "apple", producto: "Iphone SE Plus", descripcion: "Descubre nuevas posibilidades con el iPhone SE Plus. Esta versión ampliada del iPhone SE presenta una potente configuración de doble cámara, brindándote la versatilidad que necesitas para capturar momentos inolvidables.", precio: 799, imagen: "/imgTelefonos/IphoneSEPlus.webp" },
    { id: "10", categoria: "samsung", producto: "Samsung Galaxy Z Fold 4", descripcion: "Adéntrate en el futuro de la telefonía con el Samsung Galaxy Z Fold 4. Este teléfono plegable presenta una pantalla AMOLED flexible, ofreciendo una experiencia visual única. Experimenta la innovación en la palma de tu mano.", precio: 1999, imagen: "/imgTelefonos/SamsungGalaxyZFold4.webp" },
    { id: "11", categoria: "samsung", producto: "Samsung Galaxy S21", descripcion: "El Samsung Galaxy S21 redefine el rendimiento con su potente hardware y nuevas tecnologías de cámara. Captura imágenes impresionantes y disfruta de un rendimiento fluido con este buque insignia de Samsung.", precio: 1299, imagen: "/imgTelefonos/SamsungGalaxyS21.webp" },
    { id: "12", categoria: "samsung", producto: "Samsung Galaxy A73", descripcion: "Con una gran autonomía de batería y un rendimiento sólido, el Samsung Galaxy A73 se destaca como un modelo de gama media. Disfruta de una experiencia sin interrupciones con su pantalla vibrante y su diseño elegante.", precio: 499, imagen: "/imgTelefonos/SamsungGalaxyA73.webp" },
    { id: "13", categoria: "samsung", producto: "Samsung Galaxy M32", descripcion: "El Samsung Galaxy M32 ofrece un rendimiento asequible con su pantalla Super AMOLED y una batería de larga duración. Sumérgete en el entretenimiento móvil sin preocuparte por la duración de la batería.", precio: 299, imagen: "/imgTelefonos/SamsungGalaxyM32.webp" },
    { id: "14", categoria: "samsung", producto: "Samsung Galaxy Note 11", descripcion: "El regreso triunfal de la serie Note, el Samsung Galaxy Note 11, presenta un S Pen mejorado y características premium. Experimenta la productividad y la creatividad en su máxima expresión con este dispositivo innovador.", precio: 1099, imagen: "/imgTelefonos/SamsungGalaxyNote11.webp" },
    { id: "15", categoria: "xiaomi", producto: "Xiaomi Mi 12", descripcion: "El Xiaomi Mi 12 se destaca con su potente procesador Snapdragon 8cx y carga ultra rápida. Disfruta de un rendimiento excepcional y mantente conectado en todo momento con este dispositivo de vanguardia.", precio: 899, imagen: "/imgTelefonos/XiaomiMi12.webp" },
    { id: "16", categoria: "xiaomi", producto: "Xiaomi Poco X5", descripcion: "Obtén una excelente relación calidad-precio con el Xiaomi Poco X5. Equipado con una cámara versátil y un diseño atractivo, este dispositivo te ofrece una experiencia móvil completa sin comprometer tu bolsillo.", precio: 349, imagen: "/imgTelefonos/XiaomiPocoX5.webp" },
    { id: "17", categoria: "xiaomi", producto: "Xiaomi Redmi 10 Pro", descripcion: "El Xiaomi Redmi 10 Pro te sorprenderá con su batería de larga duración y una pantalla de 90 Hz. Sumérgete en la fluidez y disfruta de una experiencia visual envolvente con este smartphone asequible.", precio: 449, imagen: "/imgTelefonos/XiaomiRedmi10Pro.webp" },
    { id: "18", categoria: "xiaomi", producto: "Xiaomi Mi Mix 5", descripcion: "Experimenta la innovación con el Xiaomi Mi Mix 5. Su diseño sin marcos y cámara bajo la pantalla crean una experiencia visual única. Este dispositivo redefine los límites de la tecnología móvil con estilo y funcionalidad.", precio: 1199, imagen: "/imgTelefonos/XiaomiMiMix5.webp" },
    { id: "19", categoria: "xiaomi", producto: "Xiaomi Black Shark 4", descripcion: "Sumérgete en el emocionante mundo del gaming móvil con el Xiaomi Black Shark 4. Este teléfono gaming ofrece un rendimiento potente y características diseñadas para los amantes de los juegos, brindando una experiencia inigualable.", precio: 599, imagen: "/imgTelefonos/XiaomiBlackShark4.webp" },
    { id: "20", categoria: "apple", producto: "Iphone 13 Mini", descripcion: "El iPhone 13 Mini es compacto pero poderoso, con una cámara avanzada que captura detalles sorprendentes. Descubre la potencia de un iPhone en un diseño compacto que se adapta perfectamente a tu estilo de vida.", precio: 699, imagen: "/imgTelefonos/Iphone13Mini.webp" },
    { id: "21", categoria: "samsung", producto: "Samsung Galaxy A52s", descripcion: "Sumérgete en el mundo de la gama media con el Samsung Galaxy A52s. Con su pantalla Super AMOLED y conectividad 5G, este dispositivo ofrece una experiencia de usuario excepcional. Descubre un equilibrio perfecto entre rendimiento y precio.", precio: 449, imagen: "/imgTelefonos/SamsungGalaxyA52s.webp" },
    { id: "22", categoria: "xiaomi", producto: "Xiaomi Redmi Note 11T", descripcion: "El Xiaomi Redmi Note 11T es una versión mejorada con conectividad 5G. Disfruta de un rendimiento rápido y una conectividad ultrarrápida en un dispositivo que se adapta a tus necesidades diarias.", precio: 299, imagen: "/imgTelefonos/XiaomiRedmiNote11.webp" },
    { id: "23", categoria: "apple", producto: "Iphone 12 Pro Max", descripcion: "Experimenta el potente rendimiento y la excelencia fotográfica con el iPhone 12 Pro Max. Su sistema de cámara Pro captura imágenes impresionantes, mientras que su diseño elegante lo convierte en una declaración de estilo.", precio: 1299, imagen: "/imgTelefonos/Iphone12ProMax.webp" },
    { id: "24", categoria: "samsung", producto: "Samsung Galaxy S21 FE", descripcion: "La edición especial Samsung Galaxy S21 FE presenta características premium en un diseño atractivo. Experimenta un rendimiento excepcional y captura momentos inolvidables con su sistema de cámara avanzada.", precio: 799, imagen: "/imgTelefonos/SamsungGalaxyS21FE.webp" },
    { id: "25", categoria: "xiaomi", producto: "Xiaomi Mi 11 Lite", descripcion: "Descubre la delgadez y ligereza con el Xiaomi Mi 11 Lite. Su diseño elegante se combina con una pantalla AMOLED para ofrecer una experiencia visual impresionante. Disfruta de la potencia en un cuerpo liviano.", precio: 349, imagen: "/imgTelefonos/XiaomiMi11Lite.webp" },
    { id: "26", categoria: "apple", producto: "Iphone XR", descripcion: "El iPhone XR ofrece un rendimiento excepcional con Face ID y una pantalla Liquid Retina. Este modelo asequible no escatima en características, brindando una experiencia de usuario completa a un precio accesible.", precio: 599, imagen: "/imgTelefonos/IphoneXR.webp" },
    { id: "27", categoria: "samsung", producto: "Samsung Galaxy M42", descripcion: "El Samsung Galaxy M42 es la opción asequible que no compromete el rendimiento. Con una batería de larga duración y características esenciales, este dispositivo es perfecto para aquellos que buscan un smartphone fiable.", precio: 349, imagen: "/imgTelefonos/SamsungGalaxyM42.webp" },
    { id: "28", categoria: "xiaomi", producto: "Xiaomi Redmi 9A", descripcion: "El Xiaomi Redmi 9A es un smartphone básico con una gran autonomía de batería. Ideal para usuarios que buscan un dispositivo confiable para las tareas diarias sin romper el banco.", precio: 149, imagen: "/imgTelefonos/XiaomiRedmi9A.webp" },
    { id: "29", categoria: "apple", producto: "Iphone 11", descripcion: "Experimenta el excelente rendimiento con el iPhone 11. Su sistema de doble cámara captura imágenes vibrantes, mientras que su potente chip garantiza un rendimiento fluido en todas las aplicaciones y juegos.", precio: 699, imagen: "/imgTelefonos/Iphone11.webp" },
    { id: "30", categoria: "samsung", producto: "Samsung Galaxy A02s", descripcion: "Económico pero funcional, el Samsung Galaxy A02s presenta una triple cámara para capturar momentos especiales. Con un diseño moderno y un precio asequible, este dispositivo es ideal para aquellos que buscan calidad sin compromisos.", precio: 199, imagen: "/imgTelefonos/SamsungGalaxyA02s.webp" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        })
    })
}

export const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
            resolve(productosFiltrados);
        });
    });
};

export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productoEncontrado = productos.find((producto) => producto.id === id);
            resolve(productoEncontrado);
        });
    });
};

export const agregarProductoAlCarrito = async (id) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoCompleto = await getProductoPorId(id);
    const productoEnCarrito = carritoActual.find((item) => item.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        const producto = { ...productoCompleto, cantidad: 1 };
        carritoActual.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));

    // Emitir un evento personalizado
    window.dispatchEvent(new CustomEvent('cartChange'));
};

export const getProductosPorIds = (ids) => {
    const carritoEnLocalStorage = localStorage.getItem('carrito');
    const carritoParseado = JSON.parse(carritoEnLocalStorage) || [];
    const productosEnCarrito = carritoParseado.filter((producto) => ids.includes(producto.id));

    return productosEnCarrito;
};