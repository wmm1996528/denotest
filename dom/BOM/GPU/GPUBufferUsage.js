GPUBufferUsage = {
    "MAP_READ": 1,
    "MAP_WRITE": 2,
    "COPY_SRC": 4,
    "COPY_DST": 8,
    "INDEX": 16,
    "VERTEX": 32,
    "UNIFORM": 64,
    "STORAGE": 128,
    "INDIRECT": 256,
    "QUERY_RESOLVE": 512
}


Object.defineProperties(GPUBufferUsage, {
    [Symbol.toStringTag]: {
        value: 'GPUBufferUsage'
    },
})



GPUShaderStage = {
    "VERTEX": 1,
    "FRAGMENT": 2,
    "COMPUTE": 4
}

Object.defineProperties(GPUShaderStage, {
    [Symbol.toStringTag]: {
        value: 'GPUShaderStage'
    },
})



GPUTextureUsage = {
    "COPY_SRC": 1,
    "COPY_DST": 2,
    "TEXTURE_BINDING": 4,
    "STORAGE_BINDING": 8,
    "RENDER_ATTACHMENT": 16
}
Object.defineProperties(GPUTextureUsage, {
    [Symbol.toStringTag]: {
        value: 'GPUTextureUsage'
    },
})
