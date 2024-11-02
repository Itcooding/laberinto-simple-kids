let x = 0
let y = 0
let z = 0
let material = 0
let numero_de_paredes = 0
let bloque_por_lado = 0
player.onChat("1", function () {
    x = x + 0
    y = y + 0
    z = z + 0
    material = ORANGE_WOOL
    numero_de_paredes = 5
    bloque_por_lado = numero_de_paredes * 3
    for (let index = 0; index < numero_de_paredes; index++) {
        blocks.fill(
        material,
        world(x - bloque_por_lado, y + 0, z - bloque_por_lado),
        world(x + bloque_por_lado, y + 2, z + bloque_por_lado),
        FillOperation.Replace
        )
        blocks.fill(
        AIR,
        world(x - (bloque_por_lado - 1), y + 0, z - (bloque_por_lado - 1)),
        world(x + (bloque_por_lado - 1), y + 2, z + (bloque_por_lado - 1)),
        FillOperation.Replace
        )
        bloque_por_lado += -3
    }
})
player.onChat("2", function () {
    x = x + 0
    y = y + 0
    z = z + 0
    blocks.fill(
    AIR,
    world(x + 18, y + 0, z + 8),
    world(x + 16, y + 1, z + 8),
    FillOperation.Replace
    )
})
