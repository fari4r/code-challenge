import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from './Alert';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';



interface RecordProps {
    u_id: string,
    user_id: string,
    link: string,
    mode: string,
    onEdit: (u_id: string) => void,
    onDelete: (u_id: string) => void,
}

const Record = ({ u_id, user_id, link, mode, onEdit, onDelete }: RecordProps) => {
    function handleEdit() {
        onEdit(u_id);
    }
    function handleDelete() {
        onDelete(u_id);
    }
    function render_logo(mode: string) {
        switch (mode) {
            case 'twiiter':
                return <TwitterIcon />
            case 'facebook':
                return <FacebookIcon />
            case 'linkedIn':
                return <LinkedInIcon />
            case 'instagram':
                return <InstagramIcon />
            case 'telegram':
                return <TelegramIcon />
            case 'website':
                return <LanguageIcon />
            default:
                return <TwitterIcon />

        }
    }
    return (

        <Grid xs={12} className="record_con">
            <Grid container xs={12} >
                <Grid xs={6} className="record-text">
                    <span className="record_logo">{render_logo(mode)}</span>
                    <span style={{ margin: '0 50px' }}>{mode}</span>
                    <span style={{ margin: '0 50px' }}>{link}</span>
                    <span style={{ margin: '0 50px' }}>{user_id}</span>
                </Grid>

                <Grid xs={6} className="record_btn">
                    <Button style={{ marginLeft: '10px' }} variant="contained" color="primary" onClick={handleEdit}>ویرایش</Button>
                    <Alert onDeleteRecord={handleDelete} />
                </Grid>
            </Grid>
        </Grid>

    )
}


export default Record;