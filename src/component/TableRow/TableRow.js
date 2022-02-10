import s from "./TableRow.module.css"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const TablRow = ({ result, per, fil }) => {
    // console.log('res-',result);
    let pum = 0;
        let pas = 0;
        let pes = 0;
    result.map((r => {
        // console.log('r=', r);
        r.map((res => {
            // console.log('rr=', res[0]);
            if (res[0].res === undefined) {
            pes++;
            return
        };
            if (res[0].res > 0) {
                if (fil.p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pum++
                        return
                    }
                }
                
                if (fil.n) {
                    if((res[1].close_value - res[1].open_value)>0)pum++
                }
            // console.log('fff');
            
            return
        };
            if (res[0].res < 0) {
                if (fil.p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pas++
                        return
                    }
                }
                
                if (fil.n) {
                    if((res[1].close_value - res[1].open_value)>0)pas++
                }
            // console.log('ggg');
            // pas++
        };
        }))
        
        }))
    return (
        <>
        
        <TableRow
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={s.win} component="th" scope="row">
                {pum + pas}
              </TableCell>
              {/* <TableCell align="right">{pes}</TableCell> */}
              <TableCell align="right">{pum}</TableCell>
              <TableCell align="right">{pas}</TableCell>
                <TableCell align="right">{((pum * per.win)-(pas * per.loss)).toFixed(4)}</TableCell>
                <TableCell align="right">{(((pum * per.win / 100)-(pas * per.loss / 100)) / (pum + pas) * 100).toFixed(4)}</TableCell>
            </TableRow>
        </>
    )
}

export default TablRow;