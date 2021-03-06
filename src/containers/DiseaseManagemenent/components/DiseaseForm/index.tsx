import { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import CustomizeAutocomplete from "src/components/CustomizeAutocomplete";

import { Disease } from "../../models/Disease.model";

import { Button, Card, Modal, Stack, Switch, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface IDiseaseForm {
    open: boolean;
    data: Disease;
    handleClose: (type: "SAVE" | "CANCEL", data?: Disease, callback?: Function) => void;
}

const DiseaseForm: React.FC<IDiseaseForm> = (props: IDiseaseForm) => {
    const { data } = props;

    const [checked, setChecked] = useState<boolean>(data.isActive);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        // eslint-disable-next-line no-console
        console.log(event.target.checked); //true
        if (event.target.checked === true) {
            setValue("isActive", true);
            clearErrors("diseaseGroupId");
        } else if (event.target.checked === false) {
            setValue("isActive", false);
            clearErrors("diseaseGroupId");
        } else {
            // eslint-disable-next-line no-console
            console.log(event.target.checked);
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        clearErrors,
    } = useForm<Disease>({});
    // const [group, setGroup] = useState<Group[]>();

    useEffect(() => {
        setValue("id", data.id);
        setValue("diseaseCode", data.diseaseCode);
        setValue("name", data.name);
        setValue("description", data.description);
        setValue("diseaseGroupId", data.diseaseGroupId);
        setValue("isActive", data.isActive);
        // setValue("diseaseGroup", data.diseaseGroup);
        setChecked(data.isActive);
    }, [data, setValue, setChecked]);

    const changeValue = (value: number) => {
        setValue("diseaseGroupId", value);
        clearErrors("diseaseGroupId");
    };

    const submitHandler: SubmitHandler<Disease> = (data: Disease) => {
        // eslint-disable-next-line no-console
        console.log(data);
        if (data) {
            props.handleClose("SAVE", data, clearErrors);
        }
    };

    const { ref: diseaseGroupIdRef, ...diseaseGroupIdRefProps } = register("diseaseGroupId", {
        min: {
            value: 1,
            message: "M?? d???ch b???nh kh??ng ???????c ????? tr???ng",
        },
    });

    return (
        <Modal
            open={props.open}
            aria-labelledby="drugtype-dialog"
            aria-describedby="alert-drugtype-description"
        >
            <Card
                sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50%",
                    minWidth: 275,
                    mx: "auto",
                    p: 1,
                    m: 2,
                    borderRadius: 1,
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
                    <Typography variant="h6" component="h2">
                        Th??ng tin d???ch b???nh
                    </Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitHandler)}
                    sx={{
                        "& > :not(style)": {
                            m: 2,
                            display: "flex",
                            //  justifyContent: "center"
                        },
                    }}
                >
                    <TextField
                        id="disease-code"
                        label="M?? d???ch b???nh *"
                        variant="outlined"
                        error={!!errors.diseaseCode}
                        helperText={errors.diseaseCode && "M?? d???ch b???nh l?? b???t bu???c"}
                        {...register("diseaseCode", { required: true })}
                    />
                    <TextField
                        id="disease-name"
                        label="T??n d???ch b???nh *"
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name && "T??n d???ch b???nh l?? b???t bu???c"}
                        {...register("name", { required: true })}
                    />
                    {/* <Select
                            sx={{ maxWidth: 180 }}
                            label="Nh??m d???ch b???nh"
                            labelId="demo-simple-select-label"
                            {...register("diseaseGroupId")}
                        >
                            {group?.map((item) => (
                                <MenuItem value={item?.id} key={item?.id}>
                                    {item?.groupName}
                                </MenuItem>
                            ))}
                        </Select> */}
                    <CustomizeAutocomplete
                        query="/disease-groups"
                        field="groupName"
                        label="Nh??m d???ch b???nh"
                        searchField="group-name"
                        limit={10}
                        errors={errors.diseaseGroupId}
                        errorMessage={"Nh??m b???nh d???ch l?? b???t bu???c"}
                        inputRef={diseaseGroupIdRef}
                        {...diseaseGroupIdRefProps}
                        changeValue={changeValue}
                    />

                    <TextField
                        id="description"
                        label="M?? t???"
                        variant="outlined"
                        defaultValue={props.data.description}
                        {...register("description")}
                        multiline
                        rows={5}
                    />
                    <Stack direction="row" spacing={0}>
                        <Typography
                            sx={{
                                // mx: "auto",
                                p: 1,
                                //
                                // "& > :not(style)": { m: 1 },
                            }}
                        >
                            Tr???ng th??i:
                        </Typography>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </Stack>
                    <Box
                        sx={{
                            justifyContent: "center",
                            mx: "auto",
                            p: 1,
                            m: 1,
                            "& > :not(style)": { m: 1 },
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => props.handleClose("CANCEL", undefined, clearErrors)}
                        >
                            H???y
                        </Button>
                        <Button variant="contained" type="submit" autoFocus>
                            L??u
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Modal>
    );
};

export default DiseaseForm;
