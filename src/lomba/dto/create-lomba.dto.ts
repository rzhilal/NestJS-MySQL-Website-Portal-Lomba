import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsOptional,
  IsInt,
  IsUUID,
} from 'class-validator';

export class CreateLombaDto {
  @IsUUID()
  @IsNotEmpty()
  id_users: string;

  @IsString()
  @IsNotEmpty()
  nama_lomba: string;

  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @IsNotEmpty()
  tanggal_pendaftaran: string;

  @IsNotEmpty()
  tanggal_akhir_pendaftaran: string;

  @IsString()
  @IsNotEmpty()
  penyelenggara_lomba: string;

  @IsUrl()
  @IsNotEmpty()
  link_pendaftaran_lomba: string;

  @IsUrl()
  @IsNotEmpty()
  link_narahubung: string;

  @IsUUID()
  @IsNotEmpty()
  id_kategori: string;

  @IsString()
  @IsNotEmpty()
  tingkat_perlombaan: string;

  @IsInt()
  @IsOptional()
  biaya_pendaftaran?: number;

  @IsString()
  @IsNotEmpty()
  image_lomba: string;
}
