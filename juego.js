kaboom({
    global: true, //nos da funcion a las acciones globlaes del juego
    scale: 1.7, //la escala para la interfaz del juego
    background:[0,0,0]
})

loadRoot('https://i.imgur.com/') //carga la ruta donde estan las imagenes
loadSprite('bloque','Tjf8DYy.png') //carga el sprite
loadSprite('jefe', '1T7gHIe.png')
loadSprite('ave','FRjytfZ.png',{
	sliceX: 3,
	anims: {
		"idle": {from: 0,to: 2,speed: 5,loop: true,}
	},
})
loadSprite('enemigo','Yb421bc.png',{
	sliceX: 2,
	anims: {
		"idle": {from: 0, to: 1, speed: 5, loop: true,}
	},
})
loadSprite('hongo','Ndh0fwL.png',{
	sliceX: 2,
	anims: {
		"idle": {from: 0,to: 1,speed: 5,loop: true,
		}
	},
})
loadSprite('hero',"QwVDukQ.png",{
    sliceX: 42,
    anims: {
        attack: {from: 0, to: 4, speed: 10, loop: true},
        block: {from: 5, to: 9, speed: 5, loop: true},
        death: {from: 10, to: 17, speed: 3,loop: true},
        fall: {from: 18, to: 20, speed: 3, loop: true},
        idle: {from: 21, to: 28, speed: 3, loop: true},
        jump: {from: 29, to: 31, speed: 3, loop: true},
        run: {from: 32, to: 41, speed: 5, loop: true}
    }
})
loadSprite('negro','wsWjXmO.png')
loadSprite('arbusto', 'egax9Qu.png')
loadSprite('bloque-inf', 'yBZZnnl.png')
loadSprite('piedra', 'TXYaiLG.png')
loadSprite('arbol', 'Dr5cWIz.png')
loadSprite('muro-largo', 'PqO8AmI.png')
loadSprite('piedra2', 'zrrXtRJ.png')
loadSprite('piedra3', '9Lx5lUj.png')
loadSprite('rama', '1Z19Xzg.png')
loadSprite('planta', 'VfbXIPf.png')
loadSprite('rama-izquierda', 'H9MJUWO.png')
loadSprite('señal', 'ff3Ofci.png')
loadSprite('muro-vertical', 'dQEmOq7.png')
loadSprite('pasto-vertical', 'Qi5kft9.png')
loadSprite('coin', 'VqfshHQ.png')
loadSprite('bloque-izquierda', 'jPYHCH3.png')
loadSprite('bloque-derecha', 'dCx9KF6.png')
loadSprite('punta-derecha', '9EQxpkM.png')
loadSprite('bloque-abajo', '0OYf3Xd.png')
loadSprite('punta-izquierda', '9OeLPgk.png')
loadSprite('punta-izquierda-inf', 'WQ8Cbe1.png')
loadSprite('punta-derecha-inf', 'a4SL04w.png')
loadSprite('portal', '9vmvcEB.png')
loadSprite('plataforma', 'j9kFEKH.png')
loadSprite('bomba', 'Pf6eWU4.png')
loadSprite('trampa','2zZpOtF.png')
loadSprite('bg','Oqg00Q0.png')
loadSprite('bg1','qUMA61N.png')
loadSprite('hacha','Cy7771C.png?1')
loadSprite('bg2', '5vjCYqs.png')
loadSprite('bala', 'rC2y0Sy.png')

const LEVELS = [
    [
        '                                                                                      x                  ',
        '                                                                                                         ',
        '                                                                  a                        a   a  t t    ',
        '                                                                    $                                    ',
        '4                                                    a          ======                 a                 ',
        '4       %                                   a                         =                   x    n         ',
        '4     =====                               v              #        a    =   a    a  a  a                  ',
        '4                                      a                  n             =     #        n                 ',
        '4                                                               8====    ============  x                 ',
        '4      a  a  a   a    a    a a                                  40000=                                 p ',
        '4 b            $    #                                           400000=                        =========7',
        '8============================7                                  4000000=   a  a  a  ahhha a   =0000000006',
        '400000000000000000000000000006                                  40000000=    $               =00000000006',
        '400000000000000000000000000006                                  8============================000000000003',
        '400000000000000000000000000006                                                                           ',
        '400000000000000000000000000006                                                                           ',
        '400000000000000000000000000006                                                                           ',
        '522222222222222222222222222223                                                                           ',
    ],
    [

        '           ttttttttttttttttt                         ttttttttttttttttttttttttttttttttttt    ',
        '                             tttttttttttttttttttttt                                        ',
        '                                                                                           ',
        '                                                                                           ',
        '                                                                                           ',
        '                                                                                           ',
        '                                                                                          p',
        '                                                   a                             a   $     ',
        '                                                 a   a a                        a ====== . ',
        '                                               %     b                         a =000006 = ',
        ' l $a                    l$a                  =====.=====   .      la           =0000006   ',
        '                la    v        v       la     40000000006   =              .   ========3   ',
        '                                              40000000006                  =               ',
        '                                              40000000006                                  ',
        '                                              40000000006                                  ',
        '                                              40000000006                                  ',
        '                                              40000000006                                  ',
        '                                              40000000006                                  ',
        '                                              40000000006                                  ',
        '                                              52222222223                                  ',
    ],
    [
        '4                                                                                                ',
        '4                                                                                                ',
        '4                                                                                                ', 
        '4                                                                                               6',
        '4                                                                           4      ==6          6',
        '4                                                                           4        6          6',
        '4                                                                           4==      6          6       ',
        '4                                                                           4        6          6  ',
        '4                                            a  a  a  a  a  a  a            4      ==6          6  ',
        '4                                                                           4        6          6  ',
        '4                                           =================  a            4==      6          6    ',
        '4                                          =00000000000000006               4        6          6        ',
        '4  a  a  a  a  a  a  a a  a  a  a  a  a   =000000000000000006  a           hh      ==6          6   ',
        '4                                        =0000000000000000006                        6          6           ',
        '=========================================00000000000000000006=========================          6                          ',
        '                                                                                                6',
        '                                                                                                6',
        '                                                                                                6',
        '                                                                                                6',
        '                                                                                     ===========', 
        '                                                                                                ',
        '                                                                                                ',
        '                                                                                                ',
        '                                                                                               ',
        '                                                                                                 ',
        '                                                     ===========                                ', 
        '                                                                                                ',
        '                                                                                                ',
        '                                                                                                ',  
        '                                  ===========                                                   ', 
        '                                                                                                ',
        '                                                                                                ',
        '                                                                                                ', 
        '                                                                                                ',
        '                                                                                                ', 
        '                                                                                                ',
        '                                                                                                ', 
        '                                                      tttttttttttttttttttttttttttttttttttttttttt',
        '                                                                                                ', 
        '                                                                                                ',
        '                                                                                                ', 
        '                                                                                                ',
        '                                                                                                ', 
        '                                                                                                ',
        '                                                                                                                                                                               p ', 
        '                                                                                                                                                =======================  ',
        '                                                                                                                                               =00000000000000000000000   ', 
        '                                                                                                                                              =000000000000000000000000       ',
        '                                                                                                                                             =0000000000000000000000000                                               ', 
        '                                             ================================================================================================00000000000000000000000000', 
    ]
]


scene("juego", ({score, Nrolevel, vidas}) => {
    layers(['bg','obj','ui'],'obj')
    const level = addLevel(LEVELS[Nrolevel || 0], {
        width: 20,
        height: 20,
        pos: vec2(100, 200),
        "$": () => [
            sprite("piedra"),
            scale(0.1),
            area(),
            origin("bot"),
            color(),
            "piedra",
        ],
        ".": () => [
            sprite("hacha"),
            scale(0.3),
            area(),
            origin("bot"),
            color(),
            solid(),
            "hacha",
        ],
        "=": () => [
            sprite("bloque"),
            area(),
            origin("bot"),
            color(),
            solid(),
            scale(0.1),
            "bloque",
        ],
        "a": () => [
            sprite("coin"),
            area(),
            scale(0.05),
            origin("bot"),
            color(),
            "coin",
        ],
        "#": () => [
            sprite("arbol"),
            scale(0.2),
            origin("bot"),
            color(),
        ],
        "%": () => [
            sprite("señal"),
            scale(0.1),
            origin("bot"),
            color()
        ],
        "4": () => [
            sprite("bloque-izquierda"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color(),
            "bloque-izquierda"
        ],
        "6": () => [
            sprite("bloque-derecha"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color(),
            "bloque-derecha"
        ],
        "7": () => [
            sprite("punta-derecha"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color()
        ],
        "8": () => [
            sprite("punta-izquierda"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color()
        ],
        "5": () => [
            sprite("punta-izquierda-inf"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color(),
            "punta-izquierda-inf"
        ],

        "3": () => [
            sprite("punta-derecha-inf"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color(),
            "punta-derecha-inf"
        ],

        "2": () => [
            sprite("bloque-abajo"),
            scale(0.1),
            origin("bot"),
            area(),
            solid(),
            color(),
            "bloque-abajo"
        ],
        "0": () => [
            sprite("negro"),
            scale(0.15),
            origin("bot"),
            area(),
            color(0,0,255),
            solid(),
            color(),
        ],
        "b": () => [
            sprite("piedra2"),
            scale(0.1),
            area(),
            origin("bot"),
            color()
        ],
        "p": () => [
            sprite("portal"),
            scale(0.3),
            area(),
            origin("bot"),
            color(),
            "portal"
        ],
        "n": () => [
            sprite("plataforma"),
            area(),
            origin("bot"),
            solid(),
            color(),
            scale(0.1),
        ],
        "v": () => [
            sprite("ave"),
            scale(0.07),
            solid(),
            area(),
            color(),
            "ave",
            {
                dir:1
            }
        ],
        "x": () => [
            sprite("bomba"),
            scale(0.07),
            solid(),
            area(),
            color(),
            "bomba"
        ],
        "t": () => [
            sprite("trampa"),
            scale(0.04),
            solid(),
            area(),
            color(),
            "trampa"
        ],
        "l": () => [
            sprite('plataforma'),
            scale(0.09),
            solid(),
            area(),
            color(),
            "plataforma",
            {
                dir:1
            }
        ],
        "h": () => [
            sprite("arbusto"),
            scale(1),
            solid(),
            area(),
            color(),
            opacity(0.8),
            "arbusto"
        ],  
    })

    
    var guardarScore

    if(Nrolevel == 0){
        add([
            sprite("bg"),
            pos(0,0),
            fixed(),
            layer("bg")
        ])
        const SPEED_OBJECT = 20

        const ave = get("ave")[0]
        ave.play("idle")
        onUpdate("ave", (ave) =>{
            ave.move(0,ave.dir*50)
        })

        loop(3, ()=>{
            let a = ave.dir
            wait(0.2, ()=>{  
                ave.dir=-a
            })
        })

        const hongo = add([
            sprite("hongo"),
            pos(1800,300),
            scale(0.15),
            solid(),
            area(),
            body(),
            "hongo",
            {
                dir: 1
            }
        ])
        hongo.play("idle")

        onUpdate("hongo",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })
        
        loop(5, ()=>{
            let a = hongo.dir
            wait(0.2, ()=>{  
                hongo.dir=-a
            })
        })
        const piedra2 = add([
            sprite('piedra2'),
            pos(750,330),
            scale(0.098),
            area(),   
            "piedra2",
            {
                dir:-1
            }
        ])
        
        onUpdate("piedra2",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })
        
        loop(2, ()=>{
            let a = piedra2.dir
            wait(0.2, ()=>{  
                piedra2.dir=-a
            })
        })

        const murolargo = add([
            sprite('muro-largo'),
            pos(750,345),
            scale(0.07),
            solid(),
            area(),
            "murolargo",
            {
                dir:-1
            }
        ])

        onUpdate("murolargo",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })

        loop(2, ()=>{
            wait(0.2, ()=>{  
                murolargo.dir = -murolargo.dir
            })
        })

        const piedra3 = add([
            sprite("piedra3"),
            pos(1050,288),
            scale(0.05),
            area(),
            "piedra3",
            {
                dir:1
            }
        ])

        onUpdate("piedra3",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })

        loop(2, ()=>{
            wait(0.2, () => {
                piedra3.dir = -piedra3.dir
            })
            
        })
        const plataforma = add([
            sprite('plataforma'),
            pos(1050,305),
            scale(0.07),
            solid(),
            area(),
            "plataforma",
            {
                dir:1
            }
        ])
        
        onUpdate("plataforma",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })

        loop(2, ()=>{
            wait(0.2, () => {
                plataforma.dir = -plataforma.dir
            })
            
        })
        add([
            text("level " + (Nrolevel+1)),
            pos(270,280),
            scale(0.2),
        ])

        add([
            text('¡Elige un camino!'),
            pos(1340,150),
            scale(0.2),
        ])

       
        add([
            text('Usa la X para romper algunos arbustos'),
            pos(1100,400),
            scale(0.15),
        ])

        add([
            text('¡Este no era, Tienes que devolverte :('),
            pos(2000,200),
            scale(0.15),
        ])

        add([
            text('   VAMOSSS ->'),
            pos(2000,350),
            scale(0.2),
        ])

    }
    else if(Nrolevel == 1){
        guardarScore = score
        add([
            sprite("bg1"),
            pos(0,0),
            fixed(),
            layer("bg")
        ])
        for(i = 0; i < 29;i++){
            const bloque = get("bloque")[i]
            bloque.color = rgb(4,110,255)
        }

        for(i = 0; i < 3;i++){
            const piedra = get("piedra")[i]
            piedra.color = rgb(4,110,255)
        }

        for(i = 0; i < 2;i++){
            const piedra = get("punta-derecha-inf")[i]
            piedra.color = rgb(4,110,255)
        }
        
        const punta = get("punta-izquierda-inf")[0]
        punta.color = rgb(4,110,255)

        for(i = 0; i < 74;i++){
            const trampa = get("trampa")[i]
            trampa.color = rgb(4,110,255)
        }

        for(i = 0; i < 8;i++){
            const bloqueiz = get("bloque-izquierda")[i]
            bloqueiz.color = rgb(4,110,255)
        }

        for(i = 0; i < 9;i++){
            const bloquea = get("bloque-abajo")[i]
            bloquea.color = rgb(4,110,255)
        }

        for(i = 0; i < 10;i++){
            const bloquede = get("bloque-derecha")[i]
            bloquede.color = rgb(4,110,255)
        }

        for(i = 0; i < 2;i++){
            const plataforma1 = get("plataforma")[i]
            plataforma1.color = rgb(4,110,255)
            plataforma1.dir = 0
        }

        for(i = 2; i < 5;i++){
            const plataforma = get("plataforma")[i]
            plataforma.color = rgb(4,110,255)
            onUpdate("plataforma",(e)=>{
                e.move(e.dir*20,0) 
            })
            loop(2, ()=>{
                wait(0.2, () => {
                    plataforma.dir = -plataforma.dir
                })
                
            })
        }
        for (i = 0; i < 2; i++){
            const ave = get("ave")[i]
            ave.play("idle")
            onUpdate("ave", (ave) =>{
                ave.move(0,ave.dir*20)
            })
    
            loop(4, ()=>{
                let a = ave.dir
                wait(0.2, ()=>{  
                    ave.dir=-a
                })
            })
        }
        
        add([
            text("level " + (Nrolevel+1) + "\n  ->"),
            pos(-10,300),
            scale(0.3),
        ])   
    }

    const player = add([
        sprite('hero'),
        pos(150,150),
        scale(0.7),
        area(), 
        body()     
    ]) 
    player.play("idle")

    if(Nrolevel == 2){
        const SPEED_OBJECT = 100
        guardarScore = score
        add([
            sprite("bg2"),
            pos(0,0),
            fixed(),
            opacity(10),
            layer("bg")
        ])

        add([
            text("level " + (Nrolevel+1)),
            pos(270,280),
            scale(0.2),
        ])
        
        add([
            text('Usa la B para bloquear ataques'),
            pos(1250,300),
            scale(0.15),
        ])

        add([
            text('podras seguir corriendo pero te realentizara'),
            pos(1250,320),
            scale(0.15),
        ])

        add([
            text('SALTA'),
            pos(1050,600),
            scale(0.15),
        ])

        add([
            text('CORREE casi lo logras ----->'),
            pos(1050,1100),
            scale(0.15),
        ])
        
        for(i = 0; i < 2;i++){
            const arbusto = get("arbusto")[i]
            arbusto.color = rgb(54, 163, 47)
        }

        for(i = 0; i < 251;i++){
            const bloque = get("bloque")[i]
            bloque.color = rgb(222, 117, 19)
        }

        for(i = 0; i < 22;i++){
            const bloqueiz = get("bloque-izquierda")[i]
            bloqueiz.color = rgb(222, 117, 19)
        }

        for(i = 0; i < 30;i++){
            const bloquede = get("bloque-derecha")[i]
            bloquede.color = rgb(222, 117, 19)
        }

        const plataforma = add([
            sprite('plataforma'),
            pos(1700,705),
            scale(0.07),
            solid(),
            area(),
            "plataforma",
            {
                dir:1
            }
        ])
        
        onUpdate("plataforma",(e)=>{
            e.move(e.dir*SPEED_OBJECT,0) 
        })

        loop(4, ()=>{
            wait(0.2, () => {
                plataforma.dir = -plataforma.dir
            })  
        })

        const enemy = add([
            sprite("jefe"),
            pos(width()-1350,300),
            scale(0.3),
            state("move", [ "idle", "attack", "move", ]),
        ])
        enemy.flipX(true)

        enemy.onStateEnter("idle", async () => {
            await wait(0.1)
            enemy.enterState("attack")
        })
    
        enemy.onStateEnter("attack", async () => {
            if (player.exists()) {
                const dir = player.pos.sub(enemy.pos).unit()
                add([
                    pos(enemy.pos),
                    move(dir, 800),
                    rect(12, 12),
                    area(),
                    cleanup(),
                    origin("center"),
                    color(WHITE),
                    "bullet",
                ])
        
            }
            await wait(0.5)
            enemy.enterState("move")
        })
        
        enemy.onStateEnter("move", async () => {
            await wait(2)
            enemy.enterState("idle")
        })
        
        enemy.onStateUpdate("move", () => {
            if (!player.exists()) return
            const dir = player.pos.sub(enemy.pos).unit()
            enemy.move(dir.scale(250))
        })
        
        enemy.enterState("move")

        player.onCollide("bullet", (bullet) => {
            if(!isKeyDown("b")){
                destroy(bullet)
                destroy(player)
                vidas--
                if(vidas == 0){
                    go("gameover", {score: score,})
                }
                else{
                    player.pos = level.getPos(0,0)
                    if(Nrolevel != 0){
                        console.log(score)
                        go("juego", {
                            score: guardarScore, 
                            Nrolevel:Nrolevel, 
                            vidas: vidas
                        }) 
                    }
                    else{
                        go("juego", {
                            score: 0, 
                            Nrolevel:Nrolevel, 
                            vidas: vidas
                        })
                    }
                }
            }
            else{
                destroy(bullet)
            }
        })   
        
    }

    const SPEED = 300
    onKeyDown("left",()=>{
        if(isKeyDown("b")){
            player.move(-SPEED+200, 0)
        }else{
            player.move(-SPEED, 0)
        }
        
        player.flipX(true)
        if (player.isGrounded() && player.curAnim() !== "run") {
            player.play("run")
        }

    })

    onKeyPress("space",()=>{
        if(player.isGrounded())
        player.jump(400)
        player.play("jump")
    })

    onKeyPress("x",()=>{
        player.play("attack")
        every("arbusto", (h) => {
            if (player.isTouching(h)) {
                destroy(h)
            }
        })
    })

    onKeyDown("right", () => {
        if(isKeyDown("b")){
            player.move(SPEED-200, 0)
        }else{
            player.move(SPEED, 0)
        }
        player.flipX(false)
        if (player.isGrounded() && player.curAnim() !== "run") {
            player.play("run")
        }
    })

    onKeyDown("b", () => {
        player.play("block")
    })

    onKeyRelease(["left", "right", "space", "x"], () => {
        if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right") && !isKeyDown("space") && !isKeyDown("x")) {
            player.play("idle")
        }
    })

    player.onUpdate(() => {
        if(Nrolevel == 2){
            if (player.pos.y >= 4000) {
                vidas--
                if(vidas == 0){
                    go("gameover", {score: score,})
                }
                else{
                    player.pos = level.getPos(0,0)
                    if(Nrolevel != 0){
                        console.log(score)
                        go("juego", {
                            score: guardarScore, 
                            Nrolevel:Nrolevel, 
                            vidas: vidas
                        }) 
                    }
                    else{
                        go("juego", {
                            score: 0, 
                            Nrolevel:Nrolevel, 
                            vidas: vidas
                        })
                    }
                }
            }
        }
        else if (player.pos.y >= 500) {
            vidas--
            if(vidas == 0){
                go("gameover", {score: score,})
            }
            else{
                player.pos = level.getPos(0,0)
                if(Nrolevel != 0){
                    console.log(score)
                    go("juego", {
                        score: guardarScore, 
                        Nrolevel:Nrolevel, 
                        vidas: vidas
                    }) 
                }
                else{
                    go("juego", {
                        score: 0, 
                        Nrolevel:Nrolevel, 
                        vidas: vidas
                    })
                }
            }
        }
    })

    player.onCollide("portal", () => {
        if (Nrolevel < LEVELS.length-1) {
            go("juego", {
                Nrolevel: Nrolevel + 1,
                score: score,
                vidas: 3
            })
        } else {
            go("win", { score: score, vidas: vidas})
        }
    })

    player.onCollide("hongo", () => {
        vidas--
        if(vidas == 0){
            go("gameover", {score: 0,})
        }
        else{
            player.pos = level.getPos(0, 0)
            if(Nrolevel != 0){
                go("juego", {
                    score: guardarScore, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                }) 
            }
            else{
                go("juego", {
                    score: 0, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                })
            } 
        }   
    })

    player.onCollide("ave", () => {
        vidas--
        if(vidas == 0){
            go("gameover", {score: 0,})
        }
        else{
            player.pos = level.getPos(0, 0)
            if(Nrolevel != 0){
                console.log(score)
                go("juego", {
                    score: guardarScore, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                }) 
            }
            else{
                go("juego", {
                    score: 0, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                })
            }
        }
    })

    player.onCollide("bomba", () => {
        vidas--
        if(vidas == 0){
            go("gameover", {score: 0,})
        }
        else{
            player.pos = level.getPos(0, 0)
            if(Nrolevel != 0){
                go("juego", {
                    score: guardarScore, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                }) 
            }
            else{
                go("juego", {
                    score: 0, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                })
            }
        }  
    })

    player.onCollide("trampa", () => {
        vidas--
        console.log(vidas)
        if(vidas == 0){
            go("gameover", {score: 0,})
        }
        else{
            player.pos = level.getPos(0, 0)
            if(Nrolevel != 0){
                go("juego", {
                    score: guardarScore, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                }) 
            }
            else{
                go("juego", {
                    score: 0, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                })
            }
        }  
    })

    player.onCollide("hacha", () => {
        vidas--
        if(vidas == 0){
            go("gameover", {score: 0,})
        }
        else{
            player.pos = level.getPos(0, 0)
            if(Nrolevel != 0){
                go("juego", {
                    score: guardarScore, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                }) 
            }
            else{
                go("juego", {
                    score: 0, 
                    Nrolevel:Nrolevel, 
                    vidas: vidas
                })
            }
        }
        
    })

    player.onUpdate(()=>{
        camPos(player.pos)
    })

    player.onCollide("coin", (coin) => {
        destroy(coin)
        score++
        puntuacionTexto.text = "Score: " + score
    })

    const puntuacionTexto = add([
        text("Score: " + score),
        pos(5,5),
        scale(0.2),
        fixed()
    ])

    add([
        text("Vidas: " + vidas),
        pos(5,30),
        scale(0.2),
        fixed()
    ])
})

scene("gameover", ({score}) =>{
    add([
        sprite('muro-largo'),
        pos(width()*0.2+12, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('muro-largo'),
        pos(width()*0.56, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('planta'),
        pos(width()*0.54, height()*0.6+115),
        scale(0.15)
    ])

    add([
        sprite('piedra'),
        pos(width()*0.01, height()*0.75),
        scale(0.3)
    ])

    add([
        sprite('piedra2'),
        pos(width()*0.8, height()*0.82),
        scale(0.3)
    ])

    add([
        text("Game Over"),
        pos(width()*0.4, height()*0.3),
        scale(0.5),
    ])

    add([
        text("Puntuacion: " + score),
        pos(width()*0.4+40, height()*0.4),
        scale(0.2),
    ])

    add([
        text("Presiona enter para volver al menu principal"),
        pos(width()*0.3-20, height()*0.2+190),
        scale(0.2)
    ])

    keyDown("enter", () => {
        go("intro",{
        })
    })
})

scene("intro", () =>{
    add([
        sprite("bg"),
        pos(0,0),
        fixed(),
        layer("bg")
    ])
    add([
        sprite('muro-largo'),
        pos(width()*0.2+12, height()*0.6+123),
        scale(0.145),
    ])

    onKeyPress("f", (c) => {
        fullscreen(!isFullscreen())
    })

    add([
        sprite('muro-largo'),
        pos(width()*0.56, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('planta'),
        pos(width()*0.54, height()*0.6+115),
        scale(0.15)
    ])

    add([
        sprite('piedra'),
        pos(width()*0.01, height()*0.75),
        scale(0.3)
    ])

    add([
        sprite('piedra2'),
        pos(width()*0.8, height()*0.82),
        scale(0.3)
    ])

    add([
        text("Bienvenidos a Multiverse adventure"),
        pos(width()*0.2+30, height()*0.2),
        scale(0.3)
    ])


    add([
        text("Presiona E para ver las instrucciones y el contexto"),
        pos(width()*0.2+30, height()*0.2+100),
        scale(0.2)
    ])

    add([
        text("Presiona ENTER para jugar"),
        pos(width()*0.3+70, height()*0.2+150),
        scale(0.2)
    ])

    add([
        text("Presiona ESPACIO para ver los creditos"),
        pos(width()*0.3+20, height()*0.2+200),
        scale(0.2)
    ])

    onKeyDown("enter", () => {
        go("juego",{
            score:0,
            Nrolevel:0,
            vidas:3
        })
    })

    onKeyDown("space", () => {
        go("creditos",{
        })
    })

    onKeyDown("e", () => {
        go("contexto",{
        })
    })
})

scene("creditos", () =>{
    add([
        sprite("bg2"),
        pos(0,0),
        fixed(),
        layer("bg")
    ])
    add([
        sprite('muro-largo'),
        pos(width()*0.2+12, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('muro-largo'),
        pos(width()*0.56, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('planta'),
        pos(width()*0.54, height()*0.6+115),
        scale(0.15)
    ])

    add([
        sprite('piedra'),
        pos(width()*0.01, height()*0.75),
        scale(0.3)
    ])

    add([
        sprite('piedra2'),
        pos(width()*0.8, height()*0.82),
        scale(0.3)
    ])

    add([
        sprite('rama'),
        pos(width()*0.5+35, height()*0.1+25),
        scale(0.1)
        
    ])

    add([
        sprite('rama-izquierda'),
        pos(width()*0.4-45, height()*0.1+25),
        scale(0.1)
        
    ])

    add([
        text("CREDITOS"),
        pos(width()*0.43, height()*0.2),
        scale(0.27)
    ])

    add([
        text("Juan Camilo Castano Casas"),
        pos(width()*0.3+40, height()*0.2+50),
        scale(0.2)
    ])

    add([
        text("Juan Pablo Catano Osorio"),
        pos(width()*0.3+45, height()*0.2+80),
        scale(0.2)
    ])

    add([
        text("Ingenieria de sistemas y computacion"),
        pos(width()*0.3-5, height()*0.2+110),
        scale(0.2)
    ])

    add([
        text("Presiona enter para volver al menu principal"),
        pos(width()*0.3-20, height()*0.2+190),
        scale(0.2)
    ])

    keyDown("enter", () => {
        go("intro",{
        })
    })
})

scene("contexto", () =>{
    add([
        sprite("bg1"),
        pos(0,0),
        fixed(),
        layer("bg")
    ])
    add([
        sprite('muro-largo'),
        pos(width()*0.2+12, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('muro-largo'),
        pos(width()*0.56, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('planta'),
        pos(width()*0.54, height()*0.6+115),
        scale(0.15)
    ])

    add([
        sprite('piedra'),
        pos(width()*0.01, height()*0.75),
        scale(0.3)
    ])

    add([
        sprite('piedra2'),
        pos(width()*0.8, height()*0.82),
        scale(0.3)
    ])

    add([
        text("HISTORIA"),
        pos(width()*0.1, height()*0.2),
        scale(0.27)
    ])

    add([
        text("Durante un largo tiempo este guerrero anda\nescapando del multiverso, buscando una salida.\nAyuda a este guerrero a salir del universo\n<Calaveras>, el universo <Jungle>, y el \nuniverso <Marte> escapando del furioso dinosaurio.\n\nEvita los morir con los animales y llega a \nla victoria.\n\n\n       SUERTE"),
        pos(width()*0.01, height()*0.2+50),
        scale(0.15)
    ])

    add([
        text("INSTRUCCIONES"),
        pos(width()*0.6, height()*0.2),
        scale(0.27)
    ])

    add([
        text("- El personaje se mueve con las flechas del teclado.\n- Evita no tocar los animales, ni los hongos\n  mucho menos las cuchillas\n- Tienes 3 vidas.\n- Tu score se reinicia a 0 cada vez que pierdes una\n  vida en el nivel 1.\n- Tu score se reinicia al score con que entraste al\n  nivel, si pierdes una vida (En los niveles 2 y 3).\n- Si pierdes una vida, vuelves a empezar desde\n  el nivel que estes.\n- Si pierdes las 3 vidas, vuelves a empezar desde\n  el nivel 1.\n- Puedes destruir algunos arbustos con X.\n- El Score se multiplica por cada vida con la que \n  termines el juego"),
        pos(width()*0.5, height()*0.2+50),
        scale(0.15)
    ])

    add([
        text("Presiona enter para volver al menu principal"),
        pos(width()*0.3-20, height()*0.2+220),
        scale(0.2)
    ])

    keyDown("enter", () => {
        go("intro",{
        })
    })
})

scene("win", ({score, vidas}) =>{
    add([
        sprite("bg1"),
        pos(0,0),
        fixed(),
        layer("bg")
    ])
    add([
        sprite('muro-largo'),
        pos(width()*0.2+12, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('muro-largo'),
        pos(width()*0.56, height()*0.6+123),
        scale(0.145),
    ])

    add([
        sprite('planta'),
        pos(width()*0.54, height()*0.6+115),
        scale(0.15)
    ])

    add([
        sprite('piedra'),
        pos(width()*0.01, height()*0.75),
        scale(0.3)
    ])

    add([
        sprite('piedra2'),
        pos(width()*0.8, height()*0.82),
        scale(0.3)
    ])

    add([
        sprite('rama'),
        pos(width()*0.5+75, height()*0.1+25),
        scale(0.1)
        
    ])

    add([
        sprite('rama-izquierda'),
        pos(width()*0.4-45, height()*0.1+25),
        scale(0.1)
        
    ])

    add([
        text("FELICIDADES"),
        pos(width()*0.43, height()*0.2),
        scale(0.27)
    ])

    add([
        text("Has ganado!"),
        pos(width()*0.3+120, height()*0.2+50),
        scale(0.2)
    ])

    add([
        text("Puntuacion: " + score*vidas),
        pos(width()*0.3+110, height()*0.2+80),
        scale(0.2)
    ])

    add([
        text("Presiona ENTER para ver los creditos"),
        pos(width()*0.3+15, height()*0.2+140),
        scale(0.2)
    ])

    add([
        text("Presiona ESC para volver al menu principal"),
        pos(width()*0.3-20, height()*0.2+190),
        scale(0.2)
    ])

    keyDown("escape", () => {
        go("intro",{
        })
    })

    keyDown("enter", () => {
        go("creditos",{
        })
    })
})


function start() {
    go("intro",{
        score:0,
        Nrolevel:0,
        vidas:3
    })
}
start()