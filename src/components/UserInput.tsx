import React from 'react';
import Record from './Record';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { uuid } from 'uuidv4';
import { useFormik } from 'formik';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
interface Record {
    u_id: string,
    user_id: string,
    link: string,
    mode: string,
    onEdit?: (u_id: string) => void,
    onDelete?: (u_id: string) => void,
}


const UserInput = () => {
    const [records, setRecords] = React.useState<Record[]>([]);
    const [input_mode, setMode] = React.useState<string>("");
    const [input_link, setLink] = React.useState<string>("");
    const [input_id, setId] = React.useState<string>("");
    const [edit, setEdit] = React.useState(false);
    const [current_edit, setCurrentEdit] = React.useState<string>("");
    const [collapseStatus, setCollapseStatus] = React.useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            mode_ini: input_mode,
            link_ini: input_link,
            id_init: input_id,
        },
        onSubmit: () => {
            if (!edit) {
                if (input_id === "" && input_link === "" && input_mode === "")
                    alert("لطفا مقادیر خواسته شده را وارد کنید")
                else {
                    let unique_id: string = uuid();
                    const new_item = {
                        u_id: unique_id,
                        mode: input_mode,
                        link: input_link,
                        user_id: input_id,

                    };
                    setRecords([...records, new_item]);
                    clear_form();
                }
            }
            else {
                const new_items = records.filter((item) => item.u_id !== current_edit);
                new_items.push({ u_id: current_edit, mode: input_mode, link: input_link, user_id: input_id });
                setRecords(new_items);
                clear_form();
                setEdit(!edit);


            }
        },
    });

    function handleEdit(pass_id: string) {
        const target = records.find(item => item.u_id === pass_id);
        setMode(target!.mode);
        setLink(target!.link);
        setId(target!.user_id);
        setEdit(true);
        setCurrentEdit(pass_id);
    }
    function handleDelete(pass_id: string) {
        const new_items = records.filter((item) => item.u_id != pass_id);
        setRecords(new_items);
        clear_form();

    }
    function clear_form() {
        setMode("");
        setLink("");
        setId("");
    }
    function handleCancel() {
        clear_form();
        setCollapseStatus(!collapseStatus);
    }
    return (
        <Box className="main" width="950px" height="400px" >
            <Grid xs={12}>
                <div>مسیر های ارتباطی</div>
                <Button variant="contained" color="primary" onClick={() => setCollapseStatus(!collapseStatus)}>{!edit ? 'افزودن مسیر های ارتباطی' : 'ویرایش مسیر های ارتباطی'}</Button>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Collapse in={collapseStatus}>
                        <Grid container xs={12} style={{ padding: '30px' }}>
                            <Grid xs={4}>
                                <FormControl sx={{ minWidth: 200 }}>
                                    <InputLabel id="demo-simple-select-helper-label">نوع</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={input_mode}
                                        label="Age"
                                        onChange={(e) => setMode(e.target.value)}
                                    >
                                        <MenuItem value="twitter">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>توییتر</span>
                                                <span>
                                                    <TwitterIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value="facebook">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>فیس بوک</span>
                                                <span>
                                                    <FacebookIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value="linkedIn">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>لینکداین</span>
                                                <span>
                                                    <LinkedInIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value="instagram">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>اینستاگرام</span>
                                                <span>
                                                    <InstagramIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value="telegram">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>تلگرام</span>
                                                <span>
                                                    <TelegramIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value="website">
                                            <div className="menuItem-con">
                                                <span style={{ margin: ' 0 5px' }}>وبسایت</span>
                                                <span>
                                                    <LanguageIcon />
                                                </span>
                                            </div>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={4}>
                                <TextField variant="outlined" label="لینک" required value={input_link} onChange={(e) => setLink(e.target.value)} />
                            </Grid>

                            <Grid xs={4}>
                                <TextField variant="outlined" label="آی دی" required value={input_id} onChange={(e) => setId(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} className="btn_con">
                            <Button type="submit" variant="contained" color="primary">{edit ? 'ویرایش مسیر ارتباطی' : 'افزودن مسیر ارتباطی'}</Button>
                            <Button style={{ marginRight: '10px' }} type="button" variant="contained" color="error" onClick={handleCancel}>انصراف</Button>

                        </Grid>
                    </Collapse>
                </Box>
            </form>
            <Grid container xs={12}>
                {records.map(item => {
                    return (
                        <Grid xs={12}>
                            <Record onDelete={handleDelete} onEdit={handleEdit} u_id={item.u_id} mode={item.mode} link={item.link} user_id={item.user_id} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}


export default UserInput;