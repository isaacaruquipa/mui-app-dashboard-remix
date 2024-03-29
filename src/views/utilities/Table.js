import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { UITablePagination } from 'components/UITables';
import { CollapsibleTable } from 'components/UICollapsibleTable';
import { CustomizedTimeline } from 'components/TimeLine';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
  <>
    <Card sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff'
        }}
      >
        {title && (
          <Typography variant="subtitle1" color="inherit">
            {title}
          </Typography>
        )}
        {!title && <Box sx={{ p: 1.15 }} />}
      </Box>
    </Card>
    {data && (
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="subtitle2">{data.label}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            {data.color}
          </Typography>
        </Grid>
      </Grid>
    )}
  </>
);

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UITable = () => (
  <MainCard title="Lista de Usuarios" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard title="Linea de tiempo de avance del proyecto">
          <Grid container spacing={gridSpacing}>
            <CustomizedTimeline />
          </Grid>
        </SubCard>
       
          
      </Grid>
      <Grid item xs={12}>
        <SubCard title="Lista de usuarios">
          <Grid container spacing={gridSpacing}>
            <CollapsibleTable />
          </Grid>
        </SubCard>
       
          
      </Grid>
      <Grid item xs={12}>

      <SubCard title="Lista de productos">
          <Grid container spacing={gridSpacing}>
            <UITablePagination />
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default UITable;
