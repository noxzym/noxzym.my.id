import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { generateDateFormat } from "@/lib/utils";
import { Certificate, EducationLevel } from "@/types";

interface props {
    title: string;
    description: string;
    items: Item[];
}

export default function SectionLayout({ title, description, items }: props) {
    return (
        <section className="flex flex-col gap-4 py-12 md:gap-5">
            <div className="flex flex-col">
                <p className="font-bold text-3xl">{title}</p>
                <p className="font-medium text-foreground/85">{description}</p>
            </div>
            <Table>
                <TableHeader className="hidden md:table-header-group">
                    <TableRow>
                        {isEducationLevel(items[0]) ? (
                            <>
                                <TableHead>Institution Name</TableHead>
                                <TableHead>Level</TableHead>
                                <TableHead>Year Started</TableHead>
                                <TableHead>Year Graduated</TableHead>
                            </>
                        ) : (
                            <>
                                <TableHead>Certificate Name</TableHead>
                                <TableHead>Issue By</TableHead>
                                <TableHead>Issue Date</TableHead>
                                <TableHead>Expiration Date</TableHead>
                            </>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items
                        .sort((a, b) => {
                            if (isEducationLevel(a) && isEducationLevel(b)) {
                                return b.year_started.getTime() - a.year_started.getTime();
                            }

                            if (isCertificate(a) && isCertificate(b)) {
                                return b.issue_date.getTime() - a.issue_date.getTime();
                            }

                            return 0;
                        })
                        .map((row, i) => (
                            <TableRow key={i.toString()}>
                                <TableCell className="w-1/2 px-0 md:px-4">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg md:text-base">
                                            {isEducationLevel(row)
                                                ? row.institution_name
                                                : row.certificate_name}
                                        </p>
                                        <p className="text-xs md:hidden md:text-base">
                                            {isEducationLevel(row) ? row.level : row.issued_by} •{" "}
                                            {generateDateFormat(
                                                isEducationLevel(row)
                                                    ? row.year_started
                                                    : row.issue_date
                                            )}{" "}
                                            -{" "}
                                            {isEducationLevel(row)
                                                ? new Date(row.year_graduated!).getTime() >
                                                  Date.now()
                                                    ? "Soon"
                                                    : generateDateFormat(row.year_graduated!)
                                                : row.expiration_date
                                                  ? generateDateFormat(row.expiration_date)
                                                  : "Lifetime"}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {isEducationLevel(row) ? row.level : row.issued_by}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {generateDateFormat(
                                        isEducationLevel(row) ? row.year_started : row.issue_date
                                    )}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {isEducationLevel(row)
                                        ? new Date(row.year_graduated!).getTime() > Date.now()
                                            ? "Soon"
                                            : generateDateFormat(row.year_graduated!)
                                        : row.expiration_date
                                          ? generateDateFormat(row.expiration_date)
                                          : "Lifetime"}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </section>
    );
}

type Item = EducationLevel | Certificate;

function isEducationLevel(item: Item): item is EducationLevel {
    return "institution_name" in item;
}

function isCertificate(item: Item): item is Certificate {
    return "certificate_name" in item;
}
