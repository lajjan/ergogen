module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
		side: 'F'
    },
    body: p => `
    
    (module E73:SW_TACT_EVQ-P2602W (layer F.Cu) (tstamp 5BF2CC94)

        (descr "Low-profile SMD Tactile Switch")
        (tags "SPST Tactile Switch")

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* outline */}
        (fp_line (start 3.6 1.9) (end -3.6 1.9) (layer ${p.param.side}.SilkS) (width 0.15))
		(fp_line (start -3.6 1.9) (end -3.6 -1.9) (layer ${p.param.side}.SilkS) (width 0.15))
		(fp_line (start -3.6 -1.9) (end 3.6 -1.9) (layer ${p.param.side}.SilkS) (width 0.15))
		(fp_line (start 3.6 -1.9) (end 3.6 1.9) (layer ${p.param.side}.SilkS) (width 0.15))
        
        ${'' /* pins */}
        (pad 1 smd rect (at -2.575 -0.85 ${p.rot}) (size 1.45 1.0) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.from.str})
        (pad 1 smd rect (at 2.575 -0.85 ${p.rot}) (size 1.45 1.0) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.from.str})
        (pad 2 smd rect (at -2.575 0.85 ${p.rot}) (size 1.45 1.0) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.to.str})
        (pad 2 smd rect (at 2.575 0.85 ${p.rot}) (size 1.45 1.0) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.to.str})
    )
    
    `
}
