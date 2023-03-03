export const ReportId = (Id) => {
    console.log("Fuck u->",Id)
    return {
        type: "REPORTID",
        payload: Id
    };
};