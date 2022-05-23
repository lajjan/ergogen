module.exports = {
    nets: {
        pos: 'pos',
        neg: 'neg'
    },
    params: {
        class: 'PAD' // for Button
    },
    body: p => `
    
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
  (pad 2 thru_hole circle (at 1.0 0.0) (size 1.308 1.308) (drill 0.8) (layers *.Cu *.Mask)  ${p.net.pos.str})
  (pad 1 thru_hole rect (at -1.0 0.0) (size 1.308 1.308) (drill 0.8) (layers *.Cu *.Mask) ${p.net.neg.str})
  (fp_line (start -2.95 6.25) (end -2.95 -1.35) (layer F.Fab) (width 0.127))
  (fp_line (start -2.95 -1.35) (end 2.95 -1.35) (layer F.Fab) (width 0.127))
  (fp_line (start 2.95 -1.35) (end 2.95 6.25) (layer F.Fab) (width 0.127))
  (fp_line (start 2.95 6.25) (end -2.95 6.25) (layer F.Fab) (width 0.127))
  (fp_line (start -2.95 -1.35) (end 2.95 -1.35) (layer F.SilkS) (width 0.127))
  (fp_line (start 2.95 -1.35) (end 2.95 6.25) (layer F.SilkS) (width 0.127))
  (fp_line (start -2.95 6.25) (end -2.95 -1.35) (layer F.SilkS) (width 0.127))
  (fp_circle (center -1.0 -1.9) (end -0.9 -1.9) (layer F.SilkS) (width 0.2))
  (fp_circle (center -1.0 -1.9) (end -0.9 -1.9) (layer F.Fab) (width 0.2))
  (fp_line (start -3.2 6.5) (end -3.2 -1.6) (layer F.CrtYd) (width 0.05))
  (fp_line (start -3.2 -1.6) (end 3.2 -1.6) (layer F.CrtYd) (width 0.05))
  (fp_line (start 3.2 -1.6) (end 3.2 6.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start 3.2 6.5) (end -3.2 6.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start 2.95 6.25) (end -2.95 6.25) (layer F.SilkS) (width 0.127))
     )
    `
}
